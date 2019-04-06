export default {
  async GET_USERS({ }) {
    return await this.$axios.get(`${ process.env.USERS_ENDPOINT }`)
  },
  async GET_COMMENTS({ }) {
    return await this.$axios.get(`${ process.env.COMMENTS_ENDPOINT }`)
  },
}
