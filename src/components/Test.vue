<template>
    <!-- <input v-model="inputVal" type="text"> -->
    
    
    <!-- <h3>Counter = {{counter}}</h3>
    <button @click="counter++">Increment count </button> -->

    <h3>Counter = {{counter}}</h3>
    <button @click="increment">Increment count </button>

    
    <div>Num likes: {{likes}}</div>
    <button @click="likes += 1">Add like</button>

    <div v-if="likes < 3">Likes less than 3</div>
    <div v-else-if="likes == 3">Likes equal 3</div>    
    <div v-else>Likes more than 3</div>

    <div v-show="likes < 4">Likes less than 4</div>
    <div v-show="likes == 4">Likes equal 4</div>
    <div v-show="likes > 4">Likes more than 4</div>


    <h1>Num els in arr: {{list.length}}</h1>
    
    <h2>Num els in arr: {{doubleLength}}</h2>
    
    <button @click="list.push(list.length + 1)">Add el</button>

    <input v-model="user.address.street" type="text">

    <div>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quasi fuga sapiente sequi at accusamus labore fugit quia quae sint rem excepturi dolorem repudiandae cupiditate, nobis voluptas, nam ut aperiam.</div>
        <div>Sit obcaecati aliquam cumque qui consectetur nam inventore minima expedita? Eius dolores, qui animi officiis laudantium distinctio quam commodi excepturi, tenetur perferendis sint ducimus maxime dicta. Laborum culpa error autem?</div>
        <div>Temporibus animi ea velit a? Tempore odio mollitia, et placeat possimus vero. Architecto voluptatum cumque consequuntur aperiam ab, praesentium nam velit soluta necessitatibus, eaque, amet obcaecati. Soluta exercitationem doloremque id!</div>
        <div>Possimus, fugit accusamus ea impedit ipsum illum. Molestias illum provident accusantium inventore maxime quas similique, corporis in rerum quae! Veniam odit nostrum incidunt voluptates tenetur dignissimos quasi, recusandae error nihil.</div>
        <div>Reprehenderit qui recusandae delectus porro praesentium ullam iure nesciunt labore fugiat quam provident voluptatum non vero aliquam maiores sint molestias incidunt, est suscipit tenetur rem exercitationem nobis nam laborum. Reiciendis!</div>
    </div>

</template>

<!-- <script lang="ts"> -->
<script>

    import { computed } from 'vue';
    import count from '@/mixins/count';


    export default {
        mixins: [count],
        data(){
            return {                
                // counter: 0,
                inputVal: '',
                likes: 0,
                list: [1, 2],
                user: {
                    name: 'Yuriy',
                    address: {
                        street: 'Druzhba'
                    }
                }
            }
        },
        computed: {            
            doubleLength() {
                return this.list.length*2;
            }
        },
        watch: {
            likes(newVal) {
                console.log('new num likes: ', newVal);
            },
            user: {
                handler(newVal) {
                    console.log('new user data: ', newVal);
                    console.log('new user street: ', newVal.address.street);
                },
                deep: true
            }
        }
    }
    
</script>