<template>
  <button
    class="pl-button"
    :class="[
      `pl-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "PlButton",
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: Boolean,
    round: Boolean,
    disabled: Boolean
  },
  methods: {
    handleClick (e) {
      if (!this.disabled) {
        this.$emit('click', e)
      }
    }
  }
}
</script>


<style lang="less">
.pl-button {
  display: inline-block;
  margin: 0;
  padding: 12px 20px;
  border: 1px solid #b2bec3;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  outline: none;

  // 圆角
  &.is-round {
    border-radius: 20px;
  }

  &.is-disabled {
    cursor: not-allowed;
  }
}

.pl-button--default {
  color: #606266;
  background-color: #ffffff;

  &:hover,
  &:focus {
    color: #1a90eb;
    border-color: #b2bec3;
    background-color: #ecf5ff;
  }

  &.is-plain {
    &:hover,
    &:focus {
      color: #1a90eb;
      border-color: #1a90eb;
      background-color: #ffffff;
    }
  }

  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #bcc2ce;
    border-color: #dde3f5;
    background-color: #ffffff;
  }
}

.pl-button--primary {
  color: #ffffff;
  background-color: #1a90eb;
  border-color: #1a90eb;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #4fa3fd;
    background-color: #1a90eb;
  }

  &.is-plain {
    color: #1a90eb;
    background-color: #ecf5ff;

    &:hover,
    &:focus {
      color: #ffffff;
      background-color: #1a90eb;
    }

    &.is-disabled,
    &.is-disabled:hover,
    &.is-disabled:focus {
      color: #ffffff;
      border-color: #a1d3fa;
      background-color: #a1d3fa;
    }
  }

  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #84bfec;
    border-color: #b8d6ec;
    background-color: #f6f9fd;
  }
}

.pl-button--success {
  color: #ffffff;
  background-color: #44bd32;
  border-color: #44bd32;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #4cd137;
    background-color: #4cd137;
  }

  &.is-plain {
    color: #44bd32;
    background-color: #eef8e9;

    &:hover,
    &:focus {
      color: #ffffff;
      background-color: #44bd32;
    }

    &.is-disabled,
    &.is-disabled:hover,
    &.is-disabled:focus {
      color: #ffffff;
      border-color: #9fe994;
      background-color: #9fe994;
    }
  }

  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #97d38e;
    border-color: #c6e0c2;
    background-color: #f6fdf2;
  }
}

.pl-button--info {
  color: #ffffff;
  background-color: #636e72;
  border-color: #636e72;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #80898d;
    background-color: #80898d;
  }

  &.is-plain {
    color: #636e72;
    background-color: #eff3f5;

    &:hover,
    &:focus {
      color: #ffffff;
      background-color: #636e72;
    }

    &.is-disabled,
    &.is-disabled:hover,
    &.is-disabled:focus {
      color: #ffffff;
      border-color: #c7c9ca;
      background-color: #c7c9ca;
    }
  }

  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #a2aaad;
    border-color: #dadfe0;
    background-color: #f4f8fa;
  }
}

.pl-button--warning {
  color: #ffffff;
  background-color: #f79f1f;
  border-color: #f79f1f;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #fcb244;
    background-color: #fcb244;
  }

  &.is-plain {
    color: #f79f1f;
    background-color: #fcf5eb;

    &:hover,
    &:focus {
      color: #ffffff;
      background-color: #f79f1f;
    }

    &.is-disabled,
    &.is-disabled:hover,
    &.is-disabled:focus {
      color: #ffffff;
      border-color: #ffdca8;
      background-color: #ffdca8;
    }
  }

  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #fac87d;
    border-color: #ffe4bb;
    background-color: #fffaf3;
  }
}

.pl-button--danger {
  color: #ffffff;
  background-color: #e44724;
  border-color: #e44724;

  &:hover,
  &:focus {
    color: #ffffff;
    border-color: #f36545;
    background-color: #f36545;
  }

  &.is-plain {
    color: #f36545;
    background-color: #f8ecec;

    &:hover,
    &:focus {
      color: #ffffff;
      background-color: #e44724;
    }

    &.is-disabled,
    &.is-disabled:hover,
    &.is-disabled:focus {
      color: #ffffff;
      border-color: #fdb4a3;
      background-color: #fdb4a3;
    }
  }

  &.is-disabled,
  &.is-disabled:hover,
  &.is-disabled:focus {
    color: #ffb9a9;
    border-color: #ffdad2;
    background-color: #fcf6f6;
  }
}
</style>