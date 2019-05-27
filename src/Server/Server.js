export default class Server {
  _apiBase = 'https://jsonplaceholder.typicode.com';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    return await res.json();
  }

  getUsers() {
    return this.getResource('/users');
  }

  getPosts() {
    return this.getResource('/posts');
  }

  getCommetns() {
    return this.getResource('/comments');
  }

  getAlbums() {
    return this.getResource('/albums')
  }

  getPhotos() {
    return this.getResource('/photos')
  }
}