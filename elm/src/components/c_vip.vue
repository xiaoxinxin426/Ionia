<template>
  <div>
    <slot name="vip-1"></slot>
    <slot name="vip-3"></slot>
    <slot name="vip-2"></slot>
    <slot name="vip-4"></slot>
    <slot name="vip-5"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.z_vip_c_span1 {
  font-size: 0.625rem;
  height: 2rem;
  line-height: 2rem;
  margin-left: .5rem;
  float: left;
}
.z_vip_c_span2{
    float: right;
    font-size: .6rem;
    color: #666;
    margin-right: .25rem;
    height: 2rem;
  line-height: 2rem;
}
.z_vip_c_span3{
    float: right;
    height: 2rem;
  line-height: 2rem;
  font-size: .5rem;
  margin-right: .5rem;
}
.z_vip_c_span4{
    color: orange;
    font-size: .6rem;
    font-weight: bold;
    float: left;
}
</style>