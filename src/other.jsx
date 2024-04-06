// <div>
{
  /* {item.children && item.children.length > 0 ? (
       
        <ChildrenCollapse item={item}/>
      ) : (
        <div className="sidebar-sub-content">

          <span className="sidebar-sub-content-icon">
            <Icon />
          </span>
          <span className="sidebar-sub-content-name">{item.name}</span>
        </div>
      )}
    </div> */
}
//   <div className="sidebar-sub-content-expanded"  style={{margin:'0'}}>
{
  /* <div className="sidebar-sub-content"  style={{marginBottom:"0px"}}>  */
}
{
  /* <div>
<div className="sidebar-sub-content" onClick={toggleExpand}>

  <span className="sidebar-sub-content-name">{Icon}</span>
  <span className="sidebar-sub-content-name">{item.name}</span>


  {item.children && item.children.length > 0 && (
    <span className="sidebar-sub-content-icon">
    {isExpanded ? <KeyboardArrowUpIcon/> :  <KeyboardArrowDownIcon/>} 
    </span>
    
  )}
</div>
{isExpanded && item.children && item.children.length > 0 && (
  <div>

    {item.children.map((child, index) => (
      <div key={index} style={{margin:0}}>
         <div style={{margin:"0px", display:'flex', gap:'0'}}> 

                <span style={{color:" #7b8893"}}>●</span>
                <ChildrenCollapse item={child}/>
         </div>
      </div>
    ))}
  </div>
)}
</div> */
}

{
  /* <div>
      <div className="sidebar-sub-content" onClick={toggleExpand}>
        <span className="sidebar-sub-content-name">{item.name}</span>
        {item.children && item.children.length > 0 && (
          <span className="sidebar-sub-content-icon">
            {isExpanded ? <KeyboardArrowUpIcon/> :  <KeyboardArrowDownIcon/>}
          </span>
        )}
      </div>
      {isExpanded && item.children && item.children.length > 0 && (
        <div key={item.id} className="sidebar-sub-content-expanded" >
          {item.children.map((child) => (
            <ChildrenCollapse key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
    <div> */
}

{
  /* display child component */
}
{
  /* {item.children.map((subItem, subIndex) => (
                <ChildrenData key={subIndex} item={subItem} />
              ))} */
}

{
  /* {item.children && item.children.length > 0 ? (
                    <ChildrenCollapse item={item} key={index}/>
              ) : (
                // Render ChildrenData if item does not have children
                item.children.map((subItem, subIndex) => (
                  <ChildrenData key={subIndex} item={subItem} />
                ))
              )} */
}
{
  /* {item.children ? (
                 <ChildrenCollapse item={item} />
               ) : (
                <ChildrenData item={item} />
              )} */
}
{
  /* {item.children && item.children.some(child => child.children) ? (
  <ChildrenCollapse item={item} />
) : (
  <ChildrenData item={item} />
)} */
}
{
  /* {
  item.children && item.children.some(child => child.children) ? (
    <ChildrenCollapse item={item} />
  ) : (
    <>
      <ChildrenData item={item} />
      {item.children && item.children.map((child, index) => (
        <div key={index}>
          <ChildrenData item={child} />
        </div>
      ))}
    </>
  )
} */
}

{
  /* {
  item.children && item.children.some(child => child.children) ? (
    <ChildrenCollapse item={item} />
  ) : (
    <>
      {item.children && item.children.map((child, index) => (
        <div key={index}>
          {child.children ? (
            <ChildrenCollapse item={child} />
          ) : (
            <ChildrenData item={child} />
          )}
        </div>
      ))}
    </>
  )
} */
}

//childrendata
{
  /* <div> */
}
{
  /* {item.children && item.children.length > 0 ? (
   
    <ChildrenCollapse item={item}  icon={<Icon/>}/>
  ) : ( */
}
{
  /* <div className="sidebar-sub-content">

      <span className="sidebar-sub-content-icon">
        <Icon />
      </span>
      <span className="sidebar-sub-content-name">{item.name}</span>
    </div> */
}
{
  /* )} */
}
{
  /* </div>  */
}

{
  /* ); */
}

// childrencollpase

// <div>
//       <div className="sidebar-sub-content" onClick={toggleExpand}>
//         <span className="sidebar-sub-content-name">{item.name}</span>
//         {/* Toggle icon based on expansion state */}
//         {item.children && item.children.length > 0 && (
//          <span className="sidebar-sub-content-icon">{isExpanded ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</span>
//         )}

//       </div>
//       {/* Render children if expanded */}
//       {isExpanded && item.children && item.children.length > 0 && (
//         <div className="sidebar-sub-content-expanded">
//           {/* Recursively render ChildrenCollapse for each child */}
//           {item.children.map((child, index) => (
//             <div key={index}>
//               <ChildrenCollapse item={child} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>

// <div>
// {hasChildren && (
//   <div className="sidebar-sub-content" onClick={toggleExpand}>
//     <span className="sidebar-sub-content-icon">
//       {isExpanded ? '▼' : '▲'}
//     </span>
//     <span className="sidebar-sub-content-name">{item.name}</span>
//   </div>
// )}
// {/* Render children if expanded */}
// {isExpanded && hasChildren && (
//   <div className="sidebar-sub-content-expanded">
//     {item.children.map((child, index) => (
//       <div key={index}>
//         {/* Recursively render ChildrenCollapse for each child item */}
//         <ChildrenCollapse item={child} />
//       </div>
//     ))}
//   </div>
// )}
// </div
