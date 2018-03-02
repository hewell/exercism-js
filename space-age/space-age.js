const EARTHYEAR = 31557600;

class SpaceAge{

  constructor(sec){
    this.seconds = sec;
  }

  onEarth(){
    return +(this.seconds / (EARTHYEAR * 1.0)).toFixed(2);
  }

  onMercury(){
    return +(this.seconds / (EARTHYEAR * 0.2408467)).toFixed(2);
  }

  onVenus(){
    return +(this.seconds / (EARTHYEAR * 0.61519726)).toFixed(2);
  }

  onMars(){
    return +(this.seconds / (EARTHYEAR * 1.8808158)).toFixed(2);
  }

  onJupiter(){
    return +(this.seconds / (EARTHYEAR * 11.862615)).toFixed(2);
  }

  onSaturn(){
    return +(this.seconds / (EARTHYEAR * 29.447498)).toFixed(2);
  }

  onUranus(){
    return +(this.seconds / (EARTHYEAR * 84.016846)).toFixed(2);
  }

  onNeptune(){
    return +(this.seconds / (EARTHYEAR * 164.79132)).toFixed(2);
  }
}

module.exports = SpaceAge;
