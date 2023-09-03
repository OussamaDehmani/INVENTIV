<template>
<div class="glass">


  <div class="calculator">



    <div class="display"><span class="font_calculator">{{current || '0'}}</span></div>

    <div @click="clear" class="btn bg-gray ">C</div>
    <div @click="sign" class="btn bg-gray">+/-</div>
    <div @click="percent" class="btn bg-gray">%</div>
    <div @click="divide" class="btn operator">÷</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="times" class="btn operator">x</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="append('0')" class="btn zero">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="equal" class="btn operator">=</div>
  </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      previous: null,
      current: '',
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    clear() {
      this.current = '';
    },
    sign() {
      this.current = this.current.charAt(0) === '-' ?
        this.current.slice(1) : `-${this.current}`;
    },
    percent() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    append(number) {
      if (this.operatorClicked) {
        this.current = '';
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.');
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    times() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    minus() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
    },
    add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    equal() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    }
  }
}
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
padding: 10px;
margin-top: 100px;
}

.display {
  grid-column: 1 / 5;
  background-color: #848484;
  color: white;
  text-align: right;
    padding: 10px;
    border-radius:28px ;
margin-bottom: 20px;

}

.zero {
  grid-column: 1 / 3;
      width: 170px;
border-radius: 50px !important;
        width: 90% !important;


}
.font_calculator{
   font-family: 'Orbitron', sans-serif;

}

.btn {
  background-color: #F2F2F2;
  border: 1px solid #999;
   border-radius: 50%;
    width: 80px;
    height: 80px;
    text-align: center;
    margin: 5px;
        font-family: 'Roboto Mono', monospace;
            align-items: center;
    display: flex;
    justify-content: center;

}

.bg-gray {
 /* From https://css.glass */
background: rgba(165, 165, 165, 0.7);
/* border-radius: 16px; */
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(165, 165, 165, 0.3);

}

.operator {
  background-color: orange;
  color: white;
  border-radius: 50%;
    width: 80px;
    height: 80px;
    text-align: center;
    margin: 0 auto;
}
.glass{

}
</style>
