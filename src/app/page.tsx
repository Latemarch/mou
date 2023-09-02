import DelayedRender from '@/components/DelayedRander'
import InputName from '@/components/InputName'

export default function Home() {
  return (
    <div className="p-10 text-xl font-bold">
      <h1 className="">Roboto_Mono font test</h1>
      <p className="font-sans">Roboto_Mono font test</p>
      <p>한글폰트테스트</p>
      <DelayedRender delay={1000}>
        <div>이 메시지는 1초 후에 나타납니다.</div>
      </DelayedRender>
      <DelayedRender delay={2000}>
        <div>이 메시지는 2초 후에 나타납니다.</div>
      </DelayedRender>
      <InputName />
    </div>
  )
}
