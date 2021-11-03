import React from 'react'

const QriLogo = ({ size = 'md' }) => {
  let dimension = 44
  if (size === 'sm') {
    dimension = 33
  } else if (size === 'lg') {
    dimension = 65
  } else if (size === 'xl') {
    dimension = 99
  }
  return (
    <svg width={dimension} height={dimension} viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35.3867 8.32692C34.3601 7.97897 33.3819 7.50182 32.4758 6.90697C30.6724 5.74261 29.7826 4.54039 28.7886 4.01028C28.0732 3.57174 27.2764 3.28285 26.4462 3.16106C25.616 3.03926 24.7698 3.0871 23.9586 3.30169C23.1474 3.51628 22.3882 3.89315 21.7268 4.40952C21.0654 4.92589 20.5156 5.57104 20.1107 6.30594C19.7058 7.04084 19.4541 7.85023 19.3709 8.68517C19.2877 9.52012 19.3747 10.3633 19.6266 11.1636C19.8786 11.964 20.2902 12.7049 20.8366 13.3417C21.3831 13.9784 22.053 14.4977 22.8059 14.8682C22.5127 15.5887 22.3154 16.3445 22.219 17.1164C23.1426 16.2362 23.8523 15.1562 24.2937 13.9591C24.7351 12.7621 24.8965 11.4798 24.7654 10.2107C24.8269 11.058 25.3571 11.6307 25.6127 13.2873C26.1475 17.4904 31.0747 21.5041 31.8889 23.3548C29.8962 21.3858 28.1828 20.4864 28.5756 20.7751C27.3761 20.0134 26.0456 19.4806 24.6518 19.2038C23.844 19.045 23.0071 19.1358 22.2521 19.4641C23.0047 24.2587 27.9603 27.0371 33.1005 27.0371C38.6857 27.0371 43.2768 23.7855 43.2768 18.2003C43.2791 15.903 42.4989 13.6734 41.0647 11.8787C39.6306 10.0841 37.6279 8.83134 35.3867 8.32692Z" fill="#A7C957"/>
      <path d="M24.6467 19.2132C26.0405 19.49 27.371 20.0228 28.5705 20.7846C28.1824 20.4959 29.8958 21.3952 31.8838 23.3642C31.0697 21.5136 26.1424 17.4998 25.6076 13.2968C25.352 11.6544 24.8219 11.0674 24.7603 10.2202C24.8914 11.4893 24.73 12.7716 24.2886 13.9686C23.8472 15.1657 23.1375 16.2457 22.2139 17.1259C22.1671 17.479 22.1419 17.8347 22.1382 18.1909C22.139 18.6205 22.1738 19.0494 22.2423 19.4735C22.9987 19.1443 23.8374 19.0535 24.6467 19.2132Z" fill="#A7C957"/>
      <path d="M24.8738 10.7785C24.8454 10.5939 24.8122 10.414 24.7649 10.2294C24.7649 10.2294 23.4823 3.1723 16.2121 3.45629C14.8654 3.4798 13.5335 3.74264 12.2788 4.23253C12.2173 4.171 11.744 3.70716 11.5168 3.4421C11.2624 3.16636 10.9939 2.90408 10.7122 2.65638C9.65269 1.57744 8.20795 0.96358 6.69586 0.949821C5.18376 0.936063 3.72815 1.52354 2.64921 2.58303C1.57026 3.64251 0.956378 5.08719 0.942619 6.59929C0.928861 8.11139 1.51634 9.56705 2.57583 10.646C2.7264 10.8635 2.92373 11.0446 3.15332 11.1761C3.43948 11.404 3.74695 11.6037 4.07152 11.7724C5.8228 13.0173 5.80389 13.8125 5.93642 14.726C5.93414 14.7448 5.93414 14.7639 5.93642 14.7828C5.93642 14.8348 5.93642 14.8822 5.93642 14.9342C5.91617 15.9146 5.69865 16.8808 5.29694 17.7753C4.89522 18.6698 4.31751 19.4743 3.59821 20.1407L3.56984 20.1738C2.43477 21.1445 1.62665 22.4416 1.25566 23.8884C0.884666 25.3351 0.968846 26.861 1.49671 28.2581L1.60556 28.5563C1.87768 29.1866 2.2361 29.7759 2.67053 30.3075C2.80305 30.4685 2.94505 30.6199 3.08705 30.7809L3.18169 30.8803C3.32684 31.0223 3.48461 31.1595 3.655 31.2921L3.70232 31.3299C4.03581 31.6029 4.39211 31.8468 4.76729 32.0588L4.81466 32.0825C5.02292 32.1961 5.24533 32.3002 5.47252 32.3996L5.63349 32.4706L5.93168 32.5795L6.19671 32.6646L6.52333 32.7546C6.66533 32.7925 6.80728 32.8303 6.95875 32.8587C7.11021 32.8871 7.29009 32.9061 7.46049 32.925L7.68767 32.9581C7.89593 32.9581 8.11365 32.9913 8.33138 32.9913C8.75681 32.9882 9.18122 32.9486 9.59989 32.8729C9.65669 32.8729 9.71822 32.8729 9.77501 32.8445L9.99746 32.7924L10.3524 32.7025C10.5796 32.6315 10.7926 32.5558 11.0009 32.4706L11.1097 32.4232L11.5831 32.1913C11.6209 32.1737 11.6573 32.1531 11.6919 32.1298C11.8528 32.0446 12.0043 31.9547 12.1652 31.8648L12.2315 31.8222C12.5442 31.622 12.8416 31.3989 13.1213 31.1548L13.1687 31.1169L13.4621 30.8471L13.5379 30.7761L13.7556 30.5537L13.8077 30.4969L14.0064 30.2744C14.068 30.1987 14.1248 30.1182 14.1863 30.0378C14.1882 30.0047 14.1882 29.9714 14.1863 29.9383C14.1863 29.8957 14.1863 29.8437 14.1863 29.7916V29.7632V29.607V29.5597C14.1863 29.4935 14.1863 29.4177 14.1863 29.3325C14.1863 29.2521 14.1863 29.1621 14.1863 29.0674V29.0107C14.1863 28.9113 14.1863 28.8071 14.1863 28.6935V28.6557C14.1863 28.5515 14.1863 28.4427 14.1627 28.3291V28.2297C14.1627 28.0971 14.1626 27.9599 14.1342 27.8131C14.122 27.2348 14.1744 26.6569 14.2904 26.0903C14.3548 25.7809 14.4435 25.477 14.5555 25.1815C14.8474 24.3998 15.308 23.692 15.9044 23.1084C16.0559 22.9617 16.2074 22.8244 16.3778 22.6919C16.8406 22.3197 17.3383 21.9932 17.864 21.7168C18.3657 21.447 18.8674 21.2199 19.3218 21.0163C19.62 20.8791 19.904 20.756 20.1501 20.6282C20.3962 20.5004 20.6234 20.3916 20.8412 20.2827L21.4328 19.9656C21.7121 19.8141 21.9676 19.6816 22.2137 19.568C22.3794 19.4923 22.5403 19.426 22.687 19.3692C22.777 19.3408 22.8717 19.3218 22.9663 19.2982C24.6473 16.7976 25.328 13.7571 24.8738 10.7785Z" fill="#EC325A"/>
      <path d="M34.0898 27.5294C34.0898 30.1945 33.0311 32.7503 31.1466 34.6348C29.2622 36.5192 26.7063 37.5779 24.0413 37.5779H23.833C23.3621 37.5373 22.889 37.6271 22.4657 37.8375C22.0425 38.0479 21.6853 38.3708 21.4333 38.7707L21.3623 38.8654C21.0975 39.3548 20.7353 39.7848 20.298 40.1289C19.8607 40.4731 19.3575 40.724 18.8196 40.8662C18.2816 41.0084 17.7201 41.039 17.1699 40.956C16.6196 40.8729 16.0922 40.6781 15.6202 40.3835C15.1481 40.0888 14.7413 39.7006 14.425 39.2428C14.1087 38.785 13.8895 38.2672 13.781 37.7214C13.6724 37.1757 13.6767 36.6134 13.7937 36.0694C13.9107 35.5254 14.1379 35.011 14.4613 34.5582L14.4897 34.5203C14.581 34.3909 14.6806 34.2676 14.7879 34.1511C15.03 33.8326 15.1775 33.4524 15.2135 33.0539C15.2495 32.6555 15.1726 32.2549 14.9915 31.8981L14.9063 31.7135C14.8542 31.5999 14.8021 31.5005 14.7642 31.4201C14.4393 30.6309 14.2151 29.804 14.0969 28.9588C14.0969 28.6465 14.0448 28.2583 14.0164 27.785C13.9549 22.7158 18.0302 21.5988 20.0181 20.6001C22.006 19.6014 22.645 18.9103 24.6376 19.2133C26.0314 19.4901 27.3619 20.0229 28.5614 20.7847C28.1733 20.4959 29.9151 21.3669 31.8746 23.3643C34.369 25.8823 34.0898 27.5294 34.0898 27.5294Z" fill="#21A0A0"/>
      <path opacity="0.1" d="M14.2815 29.9717L14.2104 30.0664C14.2767 30.5349 14.2815 29.9717 14.2815 29.9717Z" fill="black"/>
      <path d="M31.0555 15.9426C30.8447 15.9583 30.6363 15.8899 30.4758 15.7525C30.3153 15.615 30.2157 15.4196 30.1987 15.209V13.3157C30.2325 13.1135 30.3369 12.9299 30.4933 12.7974C30.6498 12.665 30.8481 12.5923 31.0531 12.5923C31.2581 12.5923 31.4564 12.665 31.6128 12.7974C31.7693 12.9299 31.8737 13.1135 31.9075 13.3157V15.209C31.8917 15.4192 31.7931 15.6146 31.6334 15.7522C31.4736 15.8898 31.2657 15.9583 31.0555 15.9426Z" fill="black"/>
      <path d="M38.1552 16.0278C37.9452 16.0422 37.7381 15.9732 37.5786 15.8359C37.4191 15.6986 37.3202 15.5039 37.3032 15.2942V13.4009C37.33 13.1933 37.4316 13.0025 37.5888 12.8643C37.746 12.7261 37.9482 12.6498 38.1576 12.6498C38.3669 12.6498 38.5691 12.7261 38.7263 12.8643C38.8836 13.0025 38.9851 13.1933 39.0119 13.4009V15.2942C38.995 15.5048 38.8954 15.7002 38.7349 15.8377C38.5744 15.9751 38.366 16.0435 38.1552 16.0278Z" fill="black"/>
      <path d="M21.116 26.2609C20.9055 26.2754 20.6978 26.2066 20.5376 26.0694C20.3774 25.9321 20.2774 25.7375 20.2593 25.5273V23.634C20.293 23.4318 20.3975 23.2482 20.5539 23.1157C20.7103 22.9832 20.9087 22.9105 21.1136 22.9105C21.3186 22.9105 21.517 22.9832 21.6734 23.1157C21.8298 23.2482 21.9342 23.4318 21.968 23.634V25.5273C21.9511 25.7371 21.8521 25.9317 21.6926 26.069C21.5332 26.2063 21.326 26.2753 21.116 26.2609Z" fill="black"/>
      <path d="M28.2158 26.3556C28.0061 26.3687 27.7996 26.2994 27.6404 26.1623C27.4812 26.0252 27.3819 25.8312 27.3638 25.6219V23.7287C27.3975 23.5265 27.5019 23.3429 27.6584 23.2104C27.8148 23.0779 28.0131 23.0052 28.2181 23.0052C28.4231 23.0052 28.6215 23.0779 28.7779 23.2104C28.9343 23.3429 29.0387 23.5265 29.0725 23.7287V25.6219C29.0544 25.8321 28.9544 26.0268 28.7942 26.164C28.6339 26.3012 28.4262 26.37 28.2158 26.3556Z" fill="black"/>
      <path d="M14.6219 13.524C14.4111 13.5397 14.2027 13.4713 14.0422 13.3338C13.8817 13.1964 13.7821 13.001 13.7651 12.7903V10.8971C13.7957 10.6917 13.8991 10.5043 14.0563 10.3687C14.2136 10.2332 14.4143 10.1586 14.6219 10.1586C14.8295 10.1586 15.0302 10.2332 15.1874 10.3687C15.3446 10.5043 15.4479 10.6917 15.4785 10.8971V12.7903C15.4616 13.001 15.362 13.1964 15.2015 13.3338C15.041 13.4713 14.8326 13.5397 14.6219 13.524Z" fill="black"/>
      <path d="M21.7078 13.6139C21.4971 13.6295 21.2886 13.5612 21.1281 13.4238C20.9676 13.2863 20.868 13.0909 20.8511 12.8803V10.987C20.8779 10.7794 20.9794 10.5886 21.1367 10.4503C21.2939 10.3121 21.4961 10.2359 21.7054 10.2359C21.9148 10.2359 22.117 10.3121 22.2742 10.4503C22.4314 10.5886 22.533 10.7794 22.5598 10.987V12.8803C22.5429 13.09 22.4439 13.2847 22.2844 13.422C22.1249 13.5593 21.9178 13.6282 21.7078 13.6139Z" fill="black"/>
      <path opacity="0.1" d="M23.1135 6.5473C23.1135 6.5473 21.7787 4.30378 23.0236 3.7074C22.3909 3.96128 21.8184 4.34504 21.3433 4.83389C22.0279 5.29848 22.6268 5.87819 23.1135 6.5473Z" fill="black"/>
      <path opacity="0.1" d="M24.7651 10.2202C24.8266 11.0674 25.3568 11.6402 25.6123 13.2968C26.1472 17.4998 31.0744 21.5136 31.8885 23.3642C29.8959 21.3952 28.1825 20.4959 28.5753 20.7846C27.3757 20.0228 26.0453 19.49 24.6515 19.2132C22.6588 18.9103 22.0246 19.6345 20.0319 20.6C18.0393 21.5656 13.9688 22.7158 14.0303 27.785C14.2717 31.4059 14.2858 29.9717 14.2858 29.9717C14.2858 29.9717 12.156 33.0341 8.35523 33.0057C6.86906 33.0087 5.41754 32.5568 4.19574 31.7107C2.97394 30.8646 2.04038 29.6648 1.52051 28.2725C1.52051 28.2725 5.07983 32.4945 9.60948 30.0806C14.1391 27.6667 13.3629 25.5084 13.3061 24.8457C13.1546 23.2743 10.0734 22.2803 10.6508 21.2864C11.2283 20.2924 11.4649 20.6805 16.837 19.838C22.2092 18.9955 25.3094 14.3238 24.7651 10.2202Z" fill="black"/>
      <path opacity="0.1" d="M34.0897 27.0135C33.8192 25.8962 33.2574 24.8706 32.4615 24.0411C32.4615 24.0411 35.5381 29.9244 27.4538 34.6954C19.6962 38.9553 15.1097 32.22 15.1097 32.22C15.2206 32.5368 15.2496 32.8763 15.1942 33.2073C15.1387 33.5383 15.0006 33.8499 14.7926 34.1133C15.1476 34.0612 17.8834 35.5995 19.1235 37.0478C19.4122 37.3839 20.0701 38.7896 18.7164 39.3245C17.3627 39.8593 15.1712 39.935 14.4092 39.1683C14.7964 39.7521 15.3274 40.2264 15.951 40.5455C16.5747 40.8645 17.27 41.0176 17.97 40.9901C18.67 40.9625 19.3511 40.7552 19.9477 40.388C20.5443 40.0209 21.0364 39.5062 21.3764 38.8938L21.4474 38.7944C21.7001 38.3952 22.0575 38.0729 22.4806 37.8627C22.9037 37.6524 23.3763 37.5621 23.8471 37.6016H24.0554C26.5981 37.6031 29.0467 36.6401 30.9073 34.907C32.7678 33.1738 33.9017 30.7995 34.0802 28.2631L34.0897 27.0135Z" fill="black"/>
      <path opacity="0.1" d="M12.2885 4.23277C12.2885 4.23277 11.02 4.89542 10.4757 5.26934C9.93138 5.64326 11.6259 3.52278 10.8402 2.76547C11.3703 3.29559 12.2885 4.23277 12.2885 4.23277Z" fill="black"/>
    </svg>
  )
}

export default QriLogo
