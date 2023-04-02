export default function GenericError({ message }: { message?: string }) {
  return (
    <div className="flex justify-center w-full my-4">
      <div className="w-full rounded-lg p-6 border text-center text-xl">
        {message || 'Something went wrong'}
      </div>
    </div>
  )
}
