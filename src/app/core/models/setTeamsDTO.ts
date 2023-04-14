import { TeamsInterface } from "../observables/teams.observable";

export const setTeamsDTO = (props: any) => { 
  const defaultValue:string = '- - -'
  let content = props;
  let teamsArray: TeamsInterface[] = []
    if(Array.isArray(content)){
        content.forEach(element=>{
            teamsArray.push(
                {
                    capacity: element?.capacidad ?? defaultValue,
                    trainer: element?.entrenador ?? 'No data Available',
                    stadium:element?.estadio ?? defaultValue,
                    founded: getDate(element?.fundacion),
                    id: element?.id,
                    nationality:element?.nacionalidad ?? defaultValue,
                    name: element?.nombre ?? 'No data Available',
                    webSite:element?.sitioWeb ?? defaultValue,
                    value:element?.valor ?? 0
                }
            )
        })
    }

  return teamsArray;
};

export const getDate =(date:string): string =>{
    let teamDate = '- - -';
    if(date != null && date!=undefined){
        let dateFormat = new Date(date);
        teamDate = formatDate(dateFormat)
    }
    return teamDate;
  }
export const formatDate=(date: Date): string => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }

