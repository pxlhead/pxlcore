<template>
  <div class="pxl-popover-container">
    <transition @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <div
        v-show="showPopper"
        ref="popover"
        class="pxl-popover"
        v-bind="$attrs"
        v-on="trigger === 'hover' && { mouseenter: handleMouseEnter, mouseleave: handleMouseLeave }"
      >
        <div v-if="$slots.header" class="pxl-popover__header">
          <slot name="header" />
        </div>

        <slot />

        <div v-if="$slots.footer" class="pxl-popover__footer">
          <slot name="footer" />
        </div>
      </div>
    </transition>
    <div
      ref="reference"
      class="pxl-popover__reference"
      v-on="
        trigger === 'hover'
          ? { mouseenter: handleMouseEnter, mouseleave: handleMouseLeave }
          : { click: handleToggle }
      "
      @keydown="handleKeyDown"
    >
      <slot name="reference" />
    </div>
  </div>
</template>

<script>
import PopperJS from 'popper.js'
import { sizeProp } from '../../utils/props'

export default {
  name: 'PxlPopover',

  inheritAttrs: false,

  model: {
    prop: 'visible',
    event: 'change',
  },

  props: {
    visible: Boolean,
    trigger: {
      type: String,
      default: 'click',
      validator: val => ['click', 'hover'].includes(val),
    },
    mouseEnterDelay: {
      type: Number,
      default: 0,
    },
    mouseLeaveDelay: {
      type: Number,
      default: 200,
    },
    placement: {
      type: String,
      default: 'bottom',
      validator: val =>
        [
          'top',
          'bottom',
          'right',
          'left',
          'top-start',
          'bottom-start',
          'right-start',
          'left-start',
          'top-end',
          'bottom-end',
          'right-end',
          'left-end',
        ].includes(val),
    },
    size: sizeProp,
    disabled: Boolean,
  },

  data() {
    return {
      showPopper: false,
    }
  },

  watch: {
    value: {
      handler(value) {
        this.showPopper = value
      },
      immediate: true,
    },
    showPopper(value) {
      if (!this.disabled) {
        if (value) {
          this.updatePopper()
        }

        this.$emit('change', value)
      }
    },
    placement() {
      this.updatePopper()
    },
    disabled(value) {
      if (value) {
        this.showPopper = false
      }
    },
  },

  mounted() {
    if (this.trigger === 'click') {
      document.addEventListener('click', this.handleDocumentClick)
    }
  },

  beforeDestroy() {
    this.destroy()
    this.timer && clearTimeout(this.timer)
  },

  methods: {
    handleToggle() {
      this.showPopper = !this.showPopper
    },
    createPopper() {
      const popover = this.$refs.popover
      let reference = this.$refs.reference

      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy()
      }

      this.popperJS = new PopperJS(reference, popover, {
        placement: this.placement,
        onCreate: () => {
          this.$nextTick(this.updatePopper)
        },
      })
    },
    updatePopper() {
      if (this.popperJS) {
        this.popperJS.update()
      } else {
        this.createPopper()
      }
    },
    handleMouseEnter() {
      this.timer && clearTimeout(this.timer)
      if (this.mouseEnterDelay) {
        this.timer = setTimeout(() => {
          this.showPopper = true
        }, this.mouseEnterDelay)
      } else {
        this.showPopper = true
      }
    },
    handleMouseLeave() {
      this.timer && clearTimeout(this.timer)
      if (this.mouseLeaveDelay) {
        this.timer = setTimeout(() => {
          this.showPopper = false
        }, this.mouseLeaveDelay)
      } else {
        this.showPopper = false
      }
    },
    handleKeyDown(event) {
      if (event.key === 'Escape') {
        this.showPopper = false
      }
    },
    handleDocumentClick(event) {
      if (
        !this.$el ||
        !this.$refs.reference ||
        this.$el.contains(event.target) ||
        this.$refs.reference.contains(event.target) ||
        !this.$refs.popover ||
        this.$refs.popover.contains(event.target)
      ) {
        return
      }
      this.showPopper = false
    },
    handleAfterEnter() {
      this.$emit('after-enter')
    },
    handleAfterLeave() {
      this.$emit('after-leave')
      this.destroy()
    },
    destroy() {
      this.popperJS.destroy()
      this.popperJS = null
    },
  },
}
</script>

<style lang="scss"></style>
