import { Row } from "./Row";
import requests from '../utils/request'
export function Rowlist(){
  return(
   <>
     <Row 
        title='NETFLIX ORIGNIALS'
        fetchurl={requests.fetchNetflixOriginals}
        islarge={true}
     />
      <Row 
        title='Trending Now'
        fetchurl={requests.fetchTrending}
     />
      <Row 
        title='ActionMovies'
        fetchurl={requests.fetchActionMovies}
     />
      <Row 
        title='Documentaries'
        fetchurl={requests.fetchDocumentaries}
     />
     <Row 
        title='RomanceMovies'
        fetchurl={requests.fetchRomanceMovies}
     />
     <Row 
        title='ComedyMovies'
        fetchurl={requests.fetchComedyMovies}
     />
     <Row 
        title='HorrorMovies'
        fetchurl={requests.fetchHorrorMovies}
     />
      
     </>
  );
}