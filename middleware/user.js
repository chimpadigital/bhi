export default function ({ store, redirect }) {
  const role = store.state.user.role

  if (role) {
    if (role !== 'user') {
      return redirect('/admin')
    }
  }
}