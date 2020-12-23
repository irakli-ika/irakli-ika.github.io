<template>
  <section>
    <h1>Friends</h1>
    <ul>
      <friend-contact
        v-for='friend in friends'
        :key='friend.id'
        :id='friend.id'
        :name='friend.name'
        :phone='friend.phone'
        :email='friend.email'
        :is-favorite='friend.isFavorite'
        @toggle-favorite='toggleFavoriteEmit'
        @delete-friend='deleteFriendInArray'
        >
      </friend-contact>
      <!-- <friend-contact
        name='shalva davidovich'
        phone='222 555 999'
        email='davidovich@shako.ge'
        is-favorite='1'>
      </friend-contact> -->
      <add-form
      @add-friend='addFriendEmit'
      ></add-form>
    </ul>
  </section>
</template>

<script>

export default {
  data() {
    return {
      friends: [
        {
          id: 'irakli',
          name: 'irakli qiria',
          phone: '555 222 111',
          email: 'irakli@ika.ge',
          isFavorite: false
        },
        {
          id: 'shalva',
          name: 'shalva davidovich',
          phone: '222 555 999',
          email: 'davidovich@shako.ge',
          isFavorite: true
        }
      ]
    }
  },
  methods: {

    toggleFavoriteEmit(friendId) {
      const identFriend = this.friends.find(friend => friend.id == friendId)
      identFriend.isFavorite = !identFriend.isFavorite
    },
    addFriendEmit(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      }
      this.friends.push(newFriendContact)
    },
    deleteFriendInArray(id) {
      const identFriendIndex = this.friends.findIndex(friend => friend.id == id)
      this.friends.splice(identFriendIndex, 1)
    }

  }
}
</script>