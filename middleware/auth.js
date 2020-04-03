export default ({ store, error, redirect }) => {
  if (!store.getters.isLogged) {
    // redirect('/')
    // error({
    //   message: 'You are not connected',
    //   statusCode: 403
    // })
  }

  return true
}