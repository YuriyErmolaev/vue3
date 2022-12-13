<template>
    <!-- <input v-model="inputVal" type="text"> -->
    
    
    <!-- <h3>Counter = {{counter}}</h3>
    <button @click="counter++">Increment count </button> -->

    <h3>Counter = {{counter}}</h3>
    <button @click="increment">Increment count </button>

    
    <div>Num likes: {{likes}}</div>VSscroll
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

    <div
        style="max-height: 100vh; overflow: scroll"
        v-scroll="increment"
    >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellendus delectus fugiat, placeat suscipit perferendis nostrum aut ad velit ex? Soluta fugit cum reiciendis tenetur. Sint consequatur harum repellat sunt.
    Deleniti explicabo obcaecati ex velit delectus asperiores corrupti eius excepturi sunt, atque rerum praesentium perspiciatis veritatis ad sint expedita fugiat magni? Magnam, excepturi alias aliquam consequuntur id optio fugit non?
    Quibusdam impedit incidunt optio, illum perspiciatis asperiores vitae quis aliquam, iure veritatis hic tempora voluptas similique numquam et nulla eius! Iste at quasi corporis id a nemo eligendi quidem magni!
    Et, illum ipsa. Earum minus autem molestias tempore architecto repellendus consequatur doloribus id, quisquam itaque, ab maxime quia dolores laudantium voluptatum harum aperiam modi, sunt impedit. Officia omnis iusto rem?
    Beatae, a similique ratione quis hic incidunt repudiandae! Suscipit earum voluptatibus quis neque. Eum ducimus nisi perspiciatis enim consectetur fugiat doloremque, recusandae laborum, possimus mollitia est odio laboriosam necessitatibus velit?
    Accusamus, earum voluptatibus temporibus consequuntur laborum voluptas blanditiis? Fugiat explicabo similique doloribus ex, repellat nobis impedit earum mollitia, architecto, nihil quibusdam porro possimus eum debitis deleniti consectetur. Veniam, totam saepe!
    Ut quisquam itaque quas iusto ipsam est rerum, non consequatur blanditiis vitae veritatis dignissimos. Iste sequi esse nulla ullam aspernatur aliquid cumque, consectetur tempore ducimus quis inventore. Quas, voluptatem nihil!
    Reiciendis quisquam nisi commodi iusto distinctio nihil facilis eveniet perspiciatis ea aut, impedit aperiam rerum ex modi dolores illum dolore vitae harum temporibus aliquam quas necessitatibus facere. Sapiente, pariatur provident.
    Laboriosam fugiat perferendis, assumenda doloribus perspiciatis nesciunt. Dolorem, voluptate est. Consectetur ipsa tempora exercitationem aliquam! Modi blanditiis saepe quae nemo repellendus quam. Ipsa vero ad quod dolore? Sed, expedita mollitia.
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