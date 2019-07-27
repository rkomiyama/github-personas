import Vue from 'vue';
import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils'
import { createRenderer } from 'vue-server-renderer';
import moxios from 'moxios'
import App from '@/App.vue'

Vue.use(Vuetify)
let wrapper

describe('App.vue', () => {
  beforeEach(() => {
    moxios.install()
    wrapper = shallowMount(App)
    wrapper.vm.$refs.appBar = {
      turnUserChangeOn: jest.fn(),
      clearSearchField: jest.fn()
    }
  })

  afterEach(() => {
    wrapper.destroy()
    moxios.uninstall()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  })

  it('calls searchUserBy', () => {
    wrapper.vm.searchUserBy('fullname')
    expect(wrapper.vm.$data.searchUserOption).toEqual('fullname')
  })

  it('calls searchUser with empty field', () => {
    wrapper.vm.searchUser('')
    expect(wrapper.vm.$data.user).toBeNull()
  })

  it('calls searchUser for non-existent user', (done) => {
    wrapper.vm.searchUser('no user')
    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          "items": [{ "url": undefined }]
        }
      }).then(() => {
        expect(wrapper.vm.$data.user).toBeNull()
        done()
      })
    })
  })

  it('calls searchUser by username', (done) => {
    wrapper.vm.searchUser('rkomiyama')
    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          "items": [{ "url": "https://api.github.com/users/rkomiyama" }]
        }
      }).then(() => {
        moxios.wait(function () {
          let request = moxios.requests.mostRecent()
          request.respondWith({
            status: 200,
            response: {
              "login": "rkomiyama",
              "id": 347483,
              "node_id": "MDQ6VXNlcjM0NzQ4Mw==",
              "avatar_url": "https://avatars3.githubusercontent.com/u/347483?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/rkomiyama",
              "html_url": "https://github.com/rkomiyama",
              "followers_url": "https://api.github.com/users/rkomiyama/followers",
              "following_url": "https://api.github.com/users/rkomiyama/following{/other_user}",
              "gists_url": "https://api.github.com/users/rkomiyama/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/rkomiyama/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/rkomiyama/subscriptions",
              "organizations_url": "https://api.github.com/users/rkomiyama/orgs",
              "repos_url": "https://api.github.com/users/rkomiyama/repos",
              "events_url": "https://api.github.com/users/rkomiyama/events{/privacy}",
              "received_events_url": "https://api.github.com/users/rkomiyama/received_events",
              "type": "User",
              "site_admin": false,
              "name": "Ryu Komiyama",
              "company": null,
              "blog": "",
              "location": "Raleigh, NC",
              "email": null,
              "hireable": null,
              "bio": null,
              "public_repos": 28,
              "public_gists": 1,
              "followers": 2,
              "following": 3,
              "created_at": "2010-07-28T22:19:56Z",
              "updated_at": "2019-07-24T03:55:19Z"
          }
          }).then(() => {
            expect(wrapper.vm.$data.user.name).toEqual('Ryu Komiyama')
            done()
          })
        })
      })
    })
  })

  it('calls searchUser by full name', (done) => {
    wrapper.vm.$data.searchUserOption = 'fullname'
    wrapper.vm.searchUser('ryu komiyama')
    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: {
          "items": [{ "url": "https://api.github.com/users/rkomiyama" }]
        }
      }).then(() => {
        moxios.wait(function () {
          let request = moxios.requests.mostRecent()
          request.respondWith({
            status: 200,
            response: {
              "login": "rkomiyama",
              "id": 347483,
              "node_id": "MDQ6VXNlcjM0NzQ4Mw==",
              "avatar_url": "https://avatars3.githubusercontent.com/u/347483?v=4",
              "gravatar_id": "",
              "url": "https://api.github.com/users/rkomiyama",
              "html_url": "https://github.com/rkomiyama",
              "followers_url": "https://api.github.com/users/rkomiyama/followers",
              "following_url": "https://api.github.com/users/rkomiyama/following{/other_user}",
              "gists_url": "https://api.github.com/users/rkomiyama/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/rkomiyama/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/rkomiyama/subscriptions",
              "organizations_url": "https://api.github.com/users/rkomiyama/orgs",
              "repos_url": "https://api.github.com/users/rkomiyama/repos",
              "events_url": "https://api.github.com/users/rkomiyama/events{/privacy}",
              "received_events_url": "https://api.github.com/users/rkomiyama/received_events",
              "type": "User",
              "site_admin": false,
              "name": "Ryu Komiyama",
              "company": null,
              "blog": "",
              "location": "Raleigh, NC",
              "email": null,
              "hireable": null,
              "bio": null,
              "public_repos": 28,
              "public_gists": 1,
              "followers": 2,
              "following": 3,
              "created_at": "2010-07-28T22:19:56Z",
              "updated_at": "2019-07-24T03:55:19Z"
          }
          }).then(() => {
            expect(wrapper.vm.$data.user.name).toEqual('Ryu Komiyama')
            done()
          })
        })
      })
    })
  })

  it('removes event listener on beforeDestroy', () => {
    wrapper.destroy()
  })

  it('App renders the same HTML', () => {
    const renderer = createRenderer();
    renderer.renderToString(wrapper.vm, (err, str) => {
    if (err) throw new Error(err);
      expect(str).toMatchSnapshot();
    });
  });
})
