import React from 'react'
import * as Avatar from '@radix-ui/react-avatar'

const AvatarDemo = () => (
  <div className="flex gap-5">
    <Avatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Fallback className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-[#0051d1] text-[15px] font-medium">
        MB
      </Avatar.Fallback>
    </Avatar.Root>
  </div>
)

export default AvatarDemo
