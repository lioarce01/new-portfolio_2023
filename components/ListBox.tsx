'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { HiArrowDown } from 'react-icons/hi'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

interface TechProps {
  technologies: string[]
}

export default function Example({technologies}: TechProps) {
  const [selected, setSelected] = useState(technologies[0])

  return (
    <div>
      <Listbox>
        <div className="relative mt-1 lg:min-w-[150px]">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-[#404040] rounded-lg shadow-md cursor-default outline-none sm:text-sm">
            <span className="block truncate">{selected}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <HiArrowDown
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto scrollbar-thin scrollbar-thumb-[#303030] scrollbar-track-[#404040] scrollbar-thumb-rounded-full text-base bg-[#494949] rounded-md shadow-lg max-h-60 outline-none sm:text-sm">
              {technologies.map((tech, techIdx) => (
                <Listbox.Option
                  key={techIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-black' : 'text-white'
                    }`
                  }
                  value={tech}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {tech}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}