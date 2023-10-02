import {FC, useState, ChangeEvent } from 'react';

export enum HairColor {
  Black = 1, White = 2, Brown = 3,
}

export interface Props {
  name: string,
  age: number,
  isOld?: boolean,
  hairColor: HairColor
}

// export const Person = ({name, age, isOld}: Props) => {
export const Person: FC<Props> = ({name, age, isOld, hairColor}) => {
  const [country, setCountry] = useState<string | null>();

  type SeveralTypes = "First" | "Second" | "Third";
  const position: SeveralTypes = "Second";
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }
  
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Old: {isOld ? isOld.toString() : 'no info'}</p>
      <input placeholder='your country' onChange={handleChange}/>
      <p>Country: {country}</p>
      <p>Hair Color Code: {hairColor}</p>
    </div>
  )
}