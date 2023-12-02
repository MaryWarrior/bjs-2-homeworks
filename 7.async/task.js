class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time,callback){
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
          } else if ( this.alarmCollection.find(clock => clock.time === time) ) {
            console.warn('Уже присутствует звонок на это же время');
          }
          this.alarmCollection.push({time, callback, canCall: true});
    }

    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start(){
        if(this.intervalId){
            return;
        }
        this.intervalId = setInterval( () => {
            this.alarmCollection.forEach( clock => {
              if(clock.time === this.getCurrentFormattedTime() && clock.canCall){
                clock.canCall = false;
                clock.callback();          
              }
            })
          }, 1000);
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach( clock => clock.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}