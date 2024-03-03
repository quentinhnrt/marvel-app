import { md5 } from "js-md5";

export default class MarvelApiHelper {
  private _publicKey = "d13e0c6f7c2f1d6743ceedcc4f12067f";
  private _privateKey = "00c4d6d7ad75e82d937916d195754cf99f8a63c7";
  private _ts = "1";
  async getAllCharacters(offset: number = 0, limit: number = 20) {
    const hash = this._getHash();
    const response = await fetch(
      "https://gateway.marvel.com/v1/public/characters?apikey=" +
        this.publicKey +
        "&ts=" +
        this.ts +
        "&hash=" +
        hash +
        "&offset=" +
        offset +
        "&limit=" +
        limit
    );
    return await response.json();
  }

  private _getHash() {
    return md5(this.ts + this.privateKey + this.publicKey);
  }

  get publicKey() {
    return this._publicKey;
  }

  get privateKey() {
    return this._privateKey;
  }

  get ts() {
    return this._ts;
  }
}
