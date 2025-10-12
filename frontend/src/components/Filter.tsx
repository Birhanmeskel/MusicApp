import React from 'react'
interface Props {
  genre: string;
  setGenre: (genre: string) => void;
}

const Filter: React.FC<Props> = ({ genre, setGenre }) => {
  return (
    <div>
      <label>Filter by Genre: </label>
      <input
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Enter genre"
      />
    </div>
  )
}

export default Filter