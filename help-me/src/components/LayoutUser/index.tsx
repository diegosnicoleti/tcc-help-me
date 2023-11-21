import Header from "./header";

export default function Layout(props:any){

  return <>
    <Header username={'[USUÁRIO]'}/>
    <div id='app-root' className="mt-14">
      {props.children}
    </div>
  </>
}