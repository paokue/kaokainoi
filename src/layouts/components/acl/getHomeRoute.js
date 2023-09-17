const getHomeRoute = role => {
  if (role === 'client') return '/acl'
  else return '/home'
}

export default getHomeRoute
