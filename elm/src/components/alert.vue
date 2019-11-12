<template>
  <div class="tc">
    <section class="tip_text">
      <div class="tip">
        <span class="shu"></span>
        <span class="dian"></span>
      </div>
      <div class="ts">
        <slot name="cz"></slot>
      </div>
      <div class="que" @click="btn">确认</div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: false
    };
  },
  methods: {
    btn() {
      this.$emit("type", this.type);
    }
  }
};
</script>
<style scoped>
.tc {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
}
.tip_text {
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -4.4rem;
  margin-left: -5.5rem;
  animation: tipMove 0.4s;
  background-color: #fff;
  padding-top: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px;
  border-radius: 0.2rem;
  background: #fff;
}
.tip {
  width: 1.8rem;
  height: 1.8rem;
  border: 0.1rem solid #f8cb86;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.shu {
  width: 0.1rem;
  height: 0.9rem;
  background-color: #f8cb86;
}
.dian {
  width: 0.2rem;
  height: 0.2rem;
  border: 1px;
  border-radius: 50%;
  margin-top: 0.2rem;
  background-color: #f8cb86;
}
.ts {
  font-size: 0.5rem;
  color: #333;
  line-height: 0.9rem;
  text-align: center;
  margin-top: 0.5rem;
  padding: 0 0.4rem;
}
.que {
  font-size: 0.56rem;
  color: #fff;
  font-weight: 700;
  margin-top: 0.5rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 1.4rem;
  border: 1px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
</style>