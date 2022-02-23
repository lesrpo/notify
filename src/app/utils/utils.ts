export default class Utils {

  static isPrime(num: any) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
      if(num % i === 0) return false;
      return num > 1;
    }
    return
  }

}
