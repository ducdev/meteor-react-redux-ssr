import { Meteor } from 'meteor/meteor'
import { check } from 'meteor/check'

const users = [
  {
    name: 'Ena',
    image: 'https://images.cdn1.stockunlimited.net/clipart/young-female-avatar_1319387.jpg'
  },
  {
    name: 'Zoe',
    image: 'https://images.cdn4.stockunlimited.net/clipart/young-female-avatar_1319386.jpg'
  }
]

const posts = [
  {
    createdAt: new Date('2017-03-25T12:00:00Z'),
    title: 'Title 1',
    slug: 'title-1',
    description: 'Lorem ipsum dolor sit amet, quaeque sapientem abhorreant mel id, nec eruditi docendi comprehensam ei. His dico dicant inermis an, quo graeci dicunt ornatus eu. Est cu timeam conceptam argumentum, ne quo atqui hendrerit, no incorrupte signiferumque duo. In dicant ornatus ius.',
    image: 'http://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-2-620x413.jpg',
    votes: 5,
    author: 'Zoe'
  },{
    createdAt: new Date('2017-03-26T12:00:00Z'),
    title: 'Title 2',
    slug: 'title-2',
    description: 'Lorem ipsum dolor sit amet, quaeque sapientem abhorreant mel id, nec eruditi docendi comprehensam ei. His dico dicant inermis an, quo graeci dicunt ornatus eu. Est cu timeam conceptam argumentum, ne quo atqui hendrerit, no incorrupte signiferumque duo. In dicant ornatus ius.',
    image: 'http://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-1-620x413.jpg',
    votes: 10,
    author: 'Ena'
  },{
    createdAt: new Date('2017-03-27T12:00:00Z'),
    title: 'Title 3',
    slug: 'title-3',
    description: 'Lorem ipsum dolor sit amet, quaeque sapientem abhorreant mel id, nec eruditi docendi comprehensam ei. His dico dicant inermis an, quo graeci dicunt ornatus eu. Est cu timeam conceptam argumentum, ne quo atqui hendrerit, no incorrupte signiferumque duo. In dicant ornatus ius.',
    image: 'http://www.cameraegg.org/wp-content/uploads/2015/06/canon-powershot-g3-x-sample-images-3-620x413.jpg',
    votes: 1,
    author: 'Ena'
  }
]

Meteor.methods({
  fetchPosts() {
    return posts.sort(( a, b ) => b.votes - a.votes)
  },
  fetchPostBySlug(slug) {
    check(slug, String)

    const post = posts.find(p => p.slug === slug)
    post.authorData = users.find(u => u.name === post.author)
    return post
  }
})
