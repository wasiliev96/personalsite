<template>
  <button
    class="btn"
    :class="{ 'uppercase':uppercased, 'fill':filled, 'mini':mini, 'bold':bold, 'centered':centered, 'icon':icon, 'text-shadow':textShadow}"
  >
    <slot />
    <span>{{text}}</span>
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    },
    filled: Boolean,
    uppercased: Boolean,
    mini: Boolean,
    bold: Boolean,
    centered: Boolean,
    icon: Boolean,
    textShadow: Boolean
  }
};
</script>
<style lang="scss" scoped>
.btn {
  width: 210px;
  height: 40px;
  display: flex;
  align-items: center;
  border: none;
  color: var(--color_main);
  background-color: var(--color_secondary);
  padding: 1.4em 2em;
  margin: 10px 20px;
  box-shadow: -4px -4px 5px #ffffff, 4px 3px 5px rgba(0, 0, 0, 0.15),
    inset 0 0 0 rgba(255, 255, 255, 0.3), inset 0 0 0 rgba(0, 0, 0, 0.15);
  will-change: box-shadow;
  transition: box-shadow var(--transition_short),
    background-color var(--transition_short);
  border-radius: 10px;
  span {
    text-align: left;
  }
  svg {
    width: 1.5em;
    height: 1.5em;
    color: var(--color_accent);
    margin: 0 0.5em 0 0;
  }
  svg {
    filter: drop-shadow(-4px -4px 5px #ffffff)
      drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.15));
  }
  &:hover {
    box-shadow: 0 0 0 #ffffff, 0 0 0 #ffffff,
      inset 0 0 0 rgba(255, 255, 255, 0.3), inset 0 0 0 rgba(0, 0, 0, 0.15);
    background-color: var(--color_secondary);
    // & > svg {
    //   filter: drop-shadow(-4px -4px 5px #ffffff)
    //     drop-shadow(4px 4px 5px rgba(0, 0, 0, 0.15));
    // }
  }
  &:active {
    box-shadow: 0 0 0 #ffffff, 0 0 0 #ffffff,
      inset -2px -2px 4px rgba(255, 255, 255, 0.3),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
}
.icon {
  svg {
    font-size: 21px;
    margin: 0;
  }
}
// styled
.fill {
  background-color: var(--color_main);
  color: var(--color_secondary);
  box-shadow: -4px -4px 5px rgba(255, 255, 255, 0.3),
    4px 3px 5px rgba(0, 0, 0, 0.15);
  svg {
    filter: none;
  }
  &:hover,
  &:active {
    background-color: var(--color_main);
  }
  &:hover {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 rgba(0, 0, 0, 0.15);
  }
  &:active {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.15), 0 0 0 rgba(255, 255, 255, 0.15),
      inset -2px -2px 4px rgba(255, 255, 255, 0.3),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
}
.uppercase {
  text-transform: uppercase;
}
.mini {
  width: auto;
  min-height: auto;
  padding: 2px 13px;
  margin: 0;
  will-change: box-shadow;
  transition: box-shadow var(--transition_short),
    background-color var(--transition_short);
  &:hover {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.3), 0 0 0 rgba(0, 0, 0, 0.15);
  }
  &:active {
    box-shadow: 0 0 0 rgba(255, 255, 255, 0.15), 0 0 0 rgba(255, 255, 255, 0.15),
      inset -2px -2px 4px rgba(255, 255, 255, 0.3),
      inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
}
.bold {
  font-weight: bold;
}
.centered span {
  text-align: center;
  margin: 0 auto;
}
.text-shadow {
  text-shadow: -4px -4px 5px #ffffff, 4px 3px 5px rgba(0, 0, 0, 0.15);
}

</style>
