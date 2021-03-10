import videosearchapp from '../../assets/img/videosearchapp.png';
import thotsolutions from '../../assets/img/thotsolutions.png'
import weatherapp from '../../assets/img/weatherapp.png'

const projects = [
  {
      header: 'VIDEO SEARCH APP',
      subHeader: 'React + API',
      description: 'Consulta la API de youtube para hacer búsquedas de videos',
      img: videosearchapp,
      link: 'https://msalgadoj.github.io/youtube-video-seach-app/'
  },
  {
      header: 'COURSES APP',
      subHeader: 'JavaScript, NodeJs, MongoDB',
      description: 'Proyecto en construccion para empresa THOT Solutions',
      img: thotsolutions,
      link: 'http://thot-prueba.herokuapp.com/courses/detail/5faa94efdee4620017a38db6' 
  },
  {
      header: 'WEATHER APP',
      subHeader: 'React + API',
      description: 'Consulta la API de OpenWeatherMaps para obtener el clima de la ciudad buscada',
      img: weatherapp,
      link: 'https://msalgadoj.github.io/weather-app-reactjs/'  
  }
]

export default projects