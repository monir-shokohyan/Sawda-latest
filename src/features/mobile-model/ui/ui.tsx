import { CreateModel } from './createModel'
import { FilterModal } from './filterModal'
import { ProfileModel } from './profileModel'

function Ui() {
  return (
    <>
      <ProfileModel />
      <CreateModel />
      <FilterModal />
    </>
  )
}

export { Ui }
