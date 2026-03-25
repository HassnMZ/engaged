import Envelope from '../Envelope'

export default function Scene01Envelope({ isEnvelopeOpen, onOpen }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <Envelope isOpen={isEnvelopeOpen} onOpen={onOpen} />
    </div>
  )
}
