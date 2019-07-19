import React from 'react'
import { Grid } from 'antd-mobile'

import { Item, Title } from './StyledHotCategories'

function HotCategoriesUI(props) {
  return (
    <>
      <Title>
        热门分类
      </Title>
      <Grid 
        data={props.list}
        columnNum={4}
        hasLine={false}
        renderItem={dataItem => (
          <Item>
            {dataItem.img && <img src={dataItem.img} alt="" />}
            <span>{dataItem.title}</span>
          </Item>
        )} 
      />
    </>
  )
}

export default HotCategoriesUI