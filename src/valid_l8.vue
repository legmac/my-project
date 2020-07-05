<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSub"> 
        prevent отключает перезагрузку
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        />
        <div class="invalid-feedback" v-if="!$v.email.required">Email is reqired.</div>
        <div class="invalid-feedback" v-if="!$v.email.email">Email is invalid.</div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">Email is exists.</div>
      </div>
      <!-- @input="$v.email.$touch()" -->
      <!-- @blur="$v.email.$touch()"  Потеряи фокуса-->

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          class="form-control"
          :class="{'is-invalid': $v.password.$error}"
          @blur="$v.password.$touch()"
          v-model="password"
        />
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min lenght is {{ $v.password.$params.minLength.min }}.
          Now {{password && password.length ? password.length : 0}}
        </div>
      </div>
      <!-- passwd 2 -->
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password2"
          class="form-control"
          :class="{'is-invalid': $v.password2.$error}"
          @blur="$v.password2.$touch()"
          v-model="password2"
        />
        <div class="invalid-feedback" v-if="!$v.password2.sameAs">Password shuld match</div>
      </div>
<button 
class="btn btn-success"
type="submit"
:disabled="$v.$invalid"
>Submit</button>
      <!-- <pre>
          {{$v.password2.sameAs}}
      </pre> -->
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
    //   form: {
    //     password: ""
    //   },
      email: "",
      password: "",
      password2: ""
    };
  },
  methods:{
      onSub(){
          console.log('wtf',this.email)
          console.log('wtf',this.password)
          this.email=''
          this.password=''
          this.password2=''
      }
  },
  validations: {
    email: {
      required, //required ()
      email,
      uniqEmail: function(newEmail){
          if(email==='') return true
          return new Promise((resolve, reject)=> {
              setTimeout(() => {
                  const value = newEmail!=='test@mail.ru'
                  resolve(value)
              }, 500);
          })
          //return newEmail !== 'test@mail.ru'
        //   return false
      }
    },
    password: {
      minLength: minLength(3)
    },
    password2: {
       sameAs:sameAs('password')

      // sameAs:sameAs((vue)=>{
      //     return vue.password
      // })
    //   sameAs: sameAs(vue => {
    //     return vue.form.password;
    //   })
    }
  }
};
</script>

<style scoped>
</style>