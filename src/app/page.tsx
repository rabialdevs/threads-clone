import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ModeToggle as ThemeToggleBtn } from "../components/common/ThemeToggleBtn";
export default function Home() {
  return (
    <div className='flex gap-8'>Hello
      <Button>Click Here</Button>
      <ThemeToggleBtn/>
    </div>
  )
}
