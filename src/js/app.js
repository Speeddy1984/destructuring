export default function getSpecial(character) {

  const { special } = character;
  const arrSpecial = [];
  for (let {id, name, icon, description = 'Описание недоступно'} of special) {
    arrSpecial.push({id, name, icon, description});
  }
  
  return arrSpecial;
}