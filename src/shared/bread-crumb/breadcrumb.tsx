import { Anchor, Breadcrumbs, Text } from '@mantine/core'
import { Link } from 'react-router-dom'
import React from 'react'
import { FaHome } from 'react-icons/fa'

export interface BreadcrumbItem {
  title: React.ReactNode
  href?: string
}

interface BreadcrumbsNavProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  homeIcon?: React.ReactNode
  className?: string
  compactOnMobile?: boolean
}

const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({
  items,
  separator,
  homeIcon,
  className,
  compactOnMobile = true,
}) => {
  const defaultHomeIcon = homeIcon ?? (
    <FaHome
      size={18}
      color="#366FB4"
    />
  )

  const breadcrumbElements = items.map((item, index) => {
    const isLast = index === items.length - 1
    const isHome =
      index === 0 && (item.title === 'Home' || React.isValidElement(item.title))

    if (isLast || !item.href) {
      return (
        <Text
          key={index}
          fw={600}
          c="dimmed"
          size={compactOnMobile ? 'sm' : 'md'}
          aria-current="page"
        >
          {isHome ? defaultHomeIcon : item.title}
        </Text>
      )
    }

    return (
      <Anchor
        key={index}
        component={Link}
        to={item.href}
        size={compactOnMobile ? 'sm' : 'md'}
        c="inherit"
        underline="hover"
      >
        {isHome ? defaultHomeIcon : item.title}
      </Anchor>
    )
  })

  return (
    <nav
      aria-label="breadcrumb"
      className={className}
    >
      <Breadcrumbs separator={separator ?? '→'}>
        {breadcrumbElements}
      </Breadcrumbs>
    </nav>
  )
}

export default BreadcrumbsNav
