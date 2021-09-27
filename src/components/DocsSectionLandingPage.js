import React from 'react'
import classNames from 'classnames'

import DocsContentWide from './DocsContentWide'
import { calculateTreeData } from './sidebar/tree'
import DocsCards from './DocsCards'

const DocsSectionLandingPage = ({ docsSectionInfo, allMdx, colorClass }) => {
  const tree = calculateTreeData(docsSectionInfo.items, allMdx.edges)

  const topLevelItems = tree.filter(d => !d.items)
  const groups = tree.filter(d => d.items)

  return (
    <DocsContentWide>
      { docsSectionInfo && (
        <div className='text-qrigray-600 font-light'>
          <div className={classNames('font-black text-3xl mb-6', colorClass)}>{docsSectionInfo.title}</div>
          <div className={classNames('mb-4 text-sm text-qrigray-700')}>{docsSectionInfo.description}</div>
          {
            topLevelItems && <DocsCards items={topLevelItems} colorClass={colorClass} />
          }
          {
            groups.map((d) => (
              <DocsCards key={d} {...d} colorClass={colorClass} />
            ))
          }
        </div>
      )}
    </DocsContentWide>
  )
}

export default DocsSectionLandingPage
