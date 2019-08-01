 Consider the following block of code:
 
 ```javascript
 watch: {
    rating (newValue, oldValue) {
      if (this.control.required) {
        Vue.set( this.control, 'isValid', this.rating > 0 )
      } else {
        Vue.set( this.control, 'isValid', true )
      }
      
      if (this.control.interacted === true)
        this.$refs.ControlStamp.refresh(this.control)
    },
    pageLoading (newValue, oldValue) {
      if(newValue === false && oldValue === true) {
        if(this.executionMode && this.currentFormData[`${this.control.id}`]) {
          this.setValue(this.currentFormData[`${this.control.id}`], false)
          Vue.set( this.control, 'isValid', this.control.required && this.rating > 0 )
        } else {
          Vue.set( this.control, 'isValid', true )
        }
      }
    }
  }
  ```
  [ ] Is this the best way? Oldvalue, newvalue.... hmmmm seems messy and I think I need to refine this in the future