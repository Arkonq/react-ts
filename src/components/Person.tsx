import {FC, useState, ChangeEvent } from 'react';
import {User} from '../Interfaces';



// export const Person = ({name, age, isOld}: Person) => {
export const Person: FC<User> = ({name, age, isOld, hairColor}) => {
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