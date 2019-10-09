


class bot {
  constructor(name) {
    this.name = name
    this.hungry = 0;
    this.sleepy = 0;
    this.bored = 0;
    this.age = 0;
    this.jungle = false;
    
    this.getHungry = function() {
      this.hungry++
    }
    this.getFed = function() {
      this.hungry-=5
    }
    
    this.getSleepy = function() {
      this.sleepy++
    }
    this.getRest = function(){
      this.sleepy-=5
    }
    
    this.getBored = function(){
      this.bored++
    }
    this.getHyped = function() {
      this.bored-=5
    }
    
      this.increaseAge = function () {
      this.age++;
      console.log("'Time flys when your having fun! I am " + this.age + " hours(s) old!'");
    };
    
    this.feed = function () {
      if (this.hungry >= 30) {
        console.log("'Getting Hungry!'"); 
        $(".hungryAlert").text("Getting Hungry Now!")
      }
      else {
        console.log("'Not hungry right now!.'");
        $(".hungryAlert").text("Not Hungry, I'm good!")
      }
    }

    this.sleep = function () {
      if (this.sleepy >= 30) {
        console.log("Napp time'ZzzZzzz...'");
        $(".sleepyAlert").text("Getting Sleepy!");
        }
      else {
        console.log("'I'm so amped!.'");
        $(".sleepyAlert").text("I'm Not Tired!");
      }
    };
    this.play = function () {
      if (this.bored >= 25) {
        console.log("'Yaa! Let's chase some game !'");
        $(".playAlert").text("Lets Hunt Later!");
        $(".roarAlert").text('');
        }
      else {
        console.log("'Not right now. Later?'");
        $(".playAlert").text("Lets chase some Zebras!");
        this.roar = function () {
          console.log("'Roar! Roar! Roar! Roar!'");
          $(".roarAlert").text('Roar! Roar! Roar! Roar!');
    
      
      
      }
    
      
    
    
    };






    // 
    
    
    
    
    
    };
    this.inJungle = function () {
      if (this.jungle === false) {
        console.log("'Yes! The, jungle is my home!'");
        this.jungle = true;
      }
      else {
        console.log("'I feel like a king here...'");
      }
    };
    this.outJungle = function () {
      if (this.jungle === true) {
        console.log("'Oh boy, it's too hot out here!!...'");
        this.jungle = true;
      }
      else {
        console.log("'I can't wait to go back to the jungle...'");
      }
    };
    this.hunt = function () {
      console.log('The lion sees Zebra. Lets have some fun with these Zebras! "');
    };
  }
}

const game = {
  time: 0,
  lions: [],
  createNewLion() {
    const name = prompt("Enter the lion's name")
    const lion = new bot(name)
    game.lions.push(lion)
    this.render()
  },
  render() {
    $('#name').text(this.lions[0].name)
    $("#agestats").text(this.lions[0].age)
    $('#hungrystats').text(this.lions[0].hungry)
    $('#sleepstats').text(this.lions[0].sleepy)
    $('#boredstats').text(this.lions[0].bored)
    $('#boredstats').text(this.lions[0].bored)
  },
  setTime() {
    setInterval(() =>{
      this.time++
      this.lions[0].getHungry()
      this.lions[0].getSleepy()
      this.lions[0].getBored()
      if(this.time % 5 === 0) {
        this.lions[0].increaseAge()
      }
      if(this.time % 5 === 0) {
      this.lions[0].roar()}
      this.lions[0].sleep()
      this.lions[0].play()
      this.lions[0].feed();
      this.render()
      }, 1000)
    }
  }


// time.setTime()
// function rnd(lion){
//   return Math.floor(Math.random() * lion);
// }

 
  // grabbing the timer span from html
  // const $time = $('#time');

      // if(this.time === 0){
      //   clearInterval(interval); // stops the interval
      //   this.round++
      // } else {
      //   this.time--
      // }

      // update the time on the dom
      // $timer.text(`timer: ${this.time}s`)
    

// console.log(" ");
// console.log(" ");
// console.log("Lion: ");
// console.log("~~~~~~~~");

// console.log("Get in your jungle: ") + lion.inJungle();
// lion.roar();
// console.log(" ");
// console.log("Hunt: ") + lion.hunt();
// lion.run();
// console.log(" ");
// console.log("Go out to he wild: ") + lion.outJungle();
// console.log(" ");
// console.log("Feed the Lion: ") + lion.feed();
// console.log(" ");
// console.log("Take a nap: ") + lion.sleep();

//get the name

//Event Listener for Start Stop button
$('#startTime').on('click', function() {
  game.createNewLion()
  game.setTime()
$('#startTime').attr("disabled", true);
})

$('#food').on('click', function() {
  game.lions[0].getFed()
  console.log('Thats good!')
  $('#hungrystats').text(game.lions[0].hungry)
})

$('#sleep').on('click', function(){
  game.lions[0].getRest()
  console.log('Getting Sleepy')
  $('#sleepstats').text(game.lions[0].sleepy)
})

$('#bored').on('click', function(){
  game.lions[0].getHyped()
  console.log('I wanna get some exercise')
  $('#boredstats').text(game.lions[0].bored)
})

