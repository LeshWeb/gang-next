import { Main } from '@/app/components/01_Sections/01_Main/Main'
import { Stages } from './components/01_Sections/02_Stages/Stages'
import { Cards } from './components/01_Sections/03_Cards/Cards'
import { Devices } from './components/01_Sections/04_Devices/Devices'
import { Comments } from './components/01_Sections/05_Comments/Comments'
import { Contacts } from './components/01_Sections/06_Contacts/Contacts'

export default function Page() {
  return (
    <div className='max-w-[96vw] mx-auto overflow-x-hidden'>
      <Main />
      <Stages />
      <Cards />
      <Devices />
      <Comments />
      <Contacts />
    </div>
  )
}
