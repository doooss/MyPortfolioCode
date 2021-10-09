
export const state = () => {
  return {
    title: 'Home'  
  }
}

export const mutations = {
  changeTitle(state: { title: string }, payload:string) :void{
    state.title = payload
  }
}