import Metrics from './Metrics';

const type = {
    light: 'Comfortaa-Light',
    regular: 'Comfortaa-Regular',
    medium: 'Comfortaa-Medium',
    semibold: 'Comfortaa-Semibold',
    bold: 'Comfortaa-Bold',
   };
   
   const step = Metrics.width * 0.0025;
   const zero = Metrics.width * 0.002;
   
   const size = punto => zero + step * punto;
   
   export default {
     type,
     size,
   };
   