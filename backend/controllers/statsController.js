import Song from "../models/song.js"

export const getStats = async (req, res) => {
  try {
    const totalSongs = await Song.countDocuments();
    const genres = await Song.aggregate([
      { $group: { _id: "$genre", count: { $sum: 1 } } },
    ]);
    const artists = await Song.aggregate([
      {
        $group: {
          _id: "$artist",
          totalSongs: { $sum: 1 },
          albums: { $addToSet: "$album" },
        },
      },
    ]);

    const albums = await Song.aggregate([
      { $group: { _id: "$album", songs: { $sum: 1 } } },
    ]);

    res.json({
      totalSongs,
      totalArtists: artists.length,
      totalAlbums: albums.length,
      totalGenres: genres.length,
      genres,
      artists,
      albums,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
