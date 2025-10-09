import Song from "../models/song.js";

// @desc Get all songs
// @route GET /api/songs
export const getSongs  = async (req, res) => {
  try {
    const { genre, artist, album } = req.query;
    let query = {};

    // Case-insensitive match (e.g., pop, Pop, POP)
    // if (genre) query.genre = { $regex: new RegExp(genre, "i") };
    // if (artist) query.artist = { $regex: new RegExp(artist, "i") };
    // if (album) query.album = { $regex: new RegExp(album, "i") };
     if (genre) query.genre = { $regex: genre, $options: "i" };
     if (artist) query.artist = { $regex: artist, $options: "i" };
     if (album) query.album = { $regex: album, $options: "i" };

    // Search by title, artist, album, or genre
    if (req.query.search) {
  const search = new RegExp(req.query.search, "i");
  query.$or = [{ title: search }, { artist: search }, { album: search }, { genre: search }];
}


    // const songs = await Song.find().sort({ createdAt: -1 });
    const songs = await Song.find(query).sort({ createdAt: -1 });
    res.status(200).json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// @desc Get single song
// @route GET /api/songs/:id

export const getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) return res.status(404).json({ message: "Song not found" });
    res.status(200).json(song);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Create new song
// @route POST /api/songs
export const createSong = async (req, res) => {
  const { title, artist, album, genre } = req.body;
  try {
    const newSong = new Song({ title, artist, album, genre });
    const savedSong = await newSong.save();
    res.status(201).json(savedSong);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Update song
// @route PUT /api/songs/:id
export const updateSong = async (req, res) => {
  try {
    const updated = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Song not found" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc Delete song
// @route DELETE /api/songs/:id
export const deleteSong = async (req, res) => {
  try {
    const deleted = await Song.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Song not found" });
    res.status(200).json({ message: "Song deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


