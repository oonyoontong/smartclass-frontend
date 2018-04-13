export default {
  sidebarHover(state, payload) {
    state.sidebarHover = payload
  },
  toggleSidebarDropdownActive(state, item) {
    state.sidebarDropdownActive[item] = !state.sidebarDropdownActive[item]
  }
}
