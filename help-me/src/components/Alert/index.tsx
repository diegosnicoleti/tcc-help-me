interface AlertProps {
  type: "error" | "success"
  message: string
}

export default function Alert({
  type,
  message
}:AlertProps) 
{
  return (
    <div className={`flex items-center p-4 mb-4 text-sm ${type === "error" ? 'text-red-800' : 'text-green-800'} rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`} role="alert">
      <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">{message}</span>.
      </div>
    </div>
  )
}