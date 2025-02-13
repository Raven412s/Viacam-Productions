import * as React from "react";

const Logo: React.FC<React.SVGProps<SVGElement>> = ({width=40 , height=40}) => (
<svg width={width} height={height} viewBox="0 0 72 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M41.3326 20.564C41.8561 20.9464 42.343 21.3857 42.7223 21.9063V22.1128L43.043 22.216C43.3637 22.6634 43.3637 22.6634 43.3637 22.9388L43.1795 22.8783C42.9205 22.7943 42.6612 22.7112 42.4016 22.6291L42.0207 22.5064C41.1923 22.3173 40.4023 22.4048 39.6223 22.7323C38.6742 23.3372 38.2621 24.0922 37.9119 25.1072C37.8426 25.7595 37.9512 26.2714 38.2326 26.8625L38.3796 27.1917C38.5778 27.523 38.7946 27.7414 39.0878 27.9983L39.3885 28.2759C40.1546 28.8128 41.0591 28.79 41.974 28.7211C42.7819 28.5751 43.5155 28.0629 43.9871 27.4228C44.1437 27.1706 44.2894 26.9154 44.4326 26.656L44.6464 26.3462C44.8884 26.58 44.7792 27.124 44.78 27.4369C44.7738 29.6337 44.1795 31.5522 42.7223 33.2643L42.5197 33.5233C42.2735 33.8048 42.0116 34.022 41.7134 34.2516L41.4132 34.4844L41.1188 34.7099L40.8391 34.9297C40.1763 35.4325 39.452 35.7144 38.6602 35.9747L38.4182 36.0556C36.1186 36.7837 33.4542 36.4494 31.3141 35.452C29.8693 34.7251 28.7462 33.646 27.8636 32.335L27.7174 32.1334C26.4237 30.2861 26.2544 27.8572 26.6288 25.7164C26.8904 24.4157 27.4482 23.2585 28.2912 22.216C28.3806 22.0872 28.4697 21.9581 28.5584 21.8288C28.8371 21.4524 29.1788 21.1362 29.5739 20.8737H29.7877L29.8946 20.564C30.5184 20.0926 31.1837 19.6952 31.9257 19.4282L32.2538 19.2797C35.2865 18.0212 38.7384 18.7789 41.3326 20.564Z" fill="#CFA25A"/>
<path d="M23.7021 0.621967L23.952 0.621245C24.2261 0.620626 24.5 0.620729 24.7741 0.620833L25.3664 0.619799C25.9011 0.618964 26.4358 0.618552 26.9705 0.618561C27.305 0.618457 27.6394 0.61825 27.9739 0.61794C29.1416 0.617011 30.3094 0.616598 31.4771 0.616702C32.564 0.616702 33.6509 0.615669 34.7378 0.614017C35.6725 0.612675 36.6071 0.612158 37.5417 0.612158C38.0993 0.612158 38.6569 0.611951 39.2144 0.610815C39.739 0.609783 40.2635 0.609784 40.788 0.610507C40.98 0.610713 41.1718 0.610505 41.3638 0.609782C43.9671 0.601831 43.9671 0.601831 44.8572 1.33484C45.2636 1.76665 45.4821 2.27136 45.7154 2.80415L45.882 3.16916C46.1975 3.86761 46.4983 4.57213 46.7844 5.28227L46.8816 5.52182C47.1051 6.08187 47.1051 6.08187 47.1051 6.31482H53.7327V5.38552C53.9598 5.06936 53.9598 5.06936 54.2672 4.86925C54.6213 4.83703 54.6213 4.83703 54.9085 4.86925L54.9353 4.53367C55.0247 4.10155 55.0876 3.9953 55.443 3.73345C55.7595 3.68172 55.7595 3.68171 56.1325 3.68161L56.5562 3.67872C56.7085 3.67975 56.8608 3.68099 57.0131 3.68223C57.1696 3.68223 57.3261 3.68202 57.4827 3.68171C57.8105 3.68171 58.1383 3.68295 58.4662 3.68523C58.886 3.68822 59.3058 3.68791 59.7257 3.68657C60.0488 3.68584 60.372 3.68667 60.6952 3.68801C60.8499 3.68843 61.0047 3.68843 61.1595 3.68801C61.3759 3.68781 61.5924 3.68967 61.8089 3.69173L62.1819 3.69338C62.5296 3.73737 62.6776 3.8082 62.9258 4.04321C63.0118 4.32148 63.0129 4.57662 63.0327 4.86925L63.3869 4.90797C63.781 4.9725 63.781 4.9725 64.1017 5.17901C64.3148 5.5689 64.3236 5.88011 64.3155 6.31482C64.3758 6.31378 64.4361 6.31275 64.4982 6.31151C64.7758 6.30717 65.0534 6.30459 65.331 6.30191C65.4258 6.30015 65.5207 6.2984 65.6184 6.29675C66.5878 6.28983 67.4859 6.4254 68.2306 7.07632L68.4845 7.34736L68.7184 7.57969C69.171 8.2431 69.1569 9.05643 69.1524 9.82754L69.1531 10.1311C69.1537 10.465 69.1528 10.7989 69.1519 11.1327C69.1531 12.0273 69.1529 12.9219 69.1511 13.8165C69.1503 14.4383 69.1504 15.0601 69.1504 15.6818C69.1504 16.9215 69.1494 18.1612 69.1479 19.4009C69.146 20.8775 69.1453 22.354 69.1458 23.8305V24.048C69.1459 34.0817 69.1459 34.0817 69.0874 38.5835C69.0846 38.8094 69.0821 39.0353 69.0797 39.2612C69.0751 39.6644 69.0694 40.0675 69.0626 40.4707L69.059 40.8101C69.036 41.98 68.9841 43.2301 68.067 44.0908C67.0587 44.8352 65.702 44.6318 64.5026 44.5771L64.103 44.5608C63.7818 44.5476 63.4608 44.5336 63.1396 44.5191C63.5082 44.2817 63.6512 44.2868 64.0855 44.2844L64.4623 44.2779C64.7222 44.2752 64.9823 44.2733 65.2423 44.2722C66.1894 44.2541 66.9714 44.134 67.7296 43.5576C68.1899 42.9782 68.319 42.4639 68.3058 41.7437L68.3051 41.5041C68.3041 41.2507 68.3008 40.9973 68.2974 40.7439C68.2968 40.5863 68.2961 40.4288 68.2957 40.2713C68.2909 39.4341 68.2743 38.5969 68.2459 37.7601C68.1545 35.0005 68.1477 32.2419 68.1457 29.481C68.1449 28.4962 68.1431 27.5114 68.1404 26.5266L68.1388 25.871C68.1369 25.0563 68.1352 24.2415 68.1335 23.4268L68.1331 23.2022C68.1309 21.9933 68.1295 20.7844 68.1288 19.5755C68.128 18.3257 68.1254 17.0759 68.1216 15.8262C68.1194 15.1278 68.1181 14.4294 68.1187 13.731C68.1191 13.0771 68.1176 12.4231 68.1147 11.7691C68.114 11.5298 68.1139 11.2905 68.1147 11.0511C68.1157 10.7238 68.114 10.3966 68.1116 10.0694L68.1144 9.78469C68.1059 9.12706 67.9765 8.54016 67.6293 7.96689C67.0029 7.4343 66.3726 7.34086 65.556 7.31473L65.1667 7.30162L64.7632 7.28923L64.3533 7.27581C64.0201 7.26493 63.6867 7.25436 63.3534 7.24411L63.2465 6.00505L62.0707 5.9018V4.66274H55.9775L55.8706 5.59203L55.7637 5.79854C55.4449 5.86029 55.1263 5.87526 54.8017 5.9018L54.6948 7.24411H46.4637C45.6424 5.6575 45.6424 5.6575 45.3904 5.0233C45.2307 4.62299 45.0564 4.22855 44.8841 3.83309C44.7613 3.54563 44.6468 3.2562 44.5329 2.96554C44.2671 2.31194 44.2671 2.31194 43.707 1.89097C42.7909 1.59008 41.8625 1.62478 40.9077 1.62829C40.7142 1.62788 40.5208 1.62726 40.3275 1.62664C39.8047 1.62519 39.2819 1.62571 38.7592 1.62674C38.2108 1.62756 37.6624 1.62674 37.114 1.62632C36.1934 1.62586 35.2727 1.62641 34.3521 1.62798C33.2892 1.62963 32.2265 1.62901 31.1636 1.62736C30.2492 1.62602 29.3349 1.62581 28.4206 1.62664C27.8753 1.62705 27.33 1.62715 26.7846 1.62612C26.272 1.62519 25.7593 1.62591 25.2466 1.62767C25.059 1.62808 24.8714 1.62798 24.6837 1.62725C23.2079 1.56303 23.2079 1.56303 21.9151 2.13021C21.7374 2.32391 21.6332 2.51969 21.5165 2.75253L21.3776 3.03007C20.9399 3.92756 20.5347 4.83084 20.1674 5.75744L20.0601 6.02446L19.9665 6.26112C19.8094 6.60094 19.6098 6.92102 19.4187 7.24411H12.0428L11.9359 6.52132L6.48413 6.41807L6.37723 7.24411L6.06872 7.247C5.68667 7.25113 5.30484 7.25794 4.92289 7.26559C4.75838 7.26848 4.59386 7.27064 4.42935 7.27209C3.50244 7.28076 2.71258 7.30668 1.88755 7.76038L1.56686 7.86364C1.44553 8.10061 1.44553 8.10061 1.35306 8.37991L1.24253 8.60563C1.11254 8.97146 1.10249 9.31612 1.09715 9.69858L1.09116 9.93906C1.08496 10.2019 1.08015 10.4648 1.07534 10.7277C1.05939 11.405 1.04481 12.0823 1.03162 12.7597C1.0219 13.2469 1.0112 13.7341 1.00041 14.2212L0.993993 14.5095C0.983628 14.9848 0.973224 15.4602 0.96278 15.9355C0.938514 17.0424 0.912538 18.1493 0.878973 19.256C0.872559 19.465 0.866785 19.6741 0.860799 19.8831L0.848826 20.2592C0.845619 20.3661 0.842414 20.4731 0.838886 20.5834C0.819538 20.8607 0.775175 21.1193 0.711678 21.39H0.497884C0.408625 19.4452 0.36223 17.5009 0.334116 15.5546C0.32984 15.2658 0.32503 14.977 0.320326 14.6882C0.306486 13.8292 0.295192 12.9702 0.286442 12.1112L0.278746 11.4295C0.27447 11.0485 0.271368 10.6675 0.26923 10.2865C0.268268 10.1429 0.266986 9.99925 0.265276 9.85573C0.253624 8.84001 0.254586 8.07221 0.925473 7.24411C1.88648 6.33701 2.99896 6.29798 4.27937 6.30841L4.61054 6.30975C4.87874 6.31099 5.14695 6.31265 5.41515 6.31482L5.49533 6.07609C5.64755 5.76003 5.74931 5.66524 6.05654 5.48878C6.34377 5.44809 6.34377 5.44809 6.67547 5.44541L7.05282 5.44046H7.45914L7.87764 5.43798C8.16979 5.43667 8.46194 5.43636 8.75409 5.43705C9.12769 5.43767 9.50119 5.43446 9.8748 5.43033C10.232 5.42703 10.5893 5.42744 10.9467 5.42744L11.3523 5.42228C12.3843 5.43023 12.3843 5.43023 12.7126 5.73143C12.898 6.00505 12.898 6.00505 13.0049 6.31482H18.7773L18.8842 5.79854C18.9731 5.60731 18.9731 5.60731 19.078 5.42424C19.2522 5.10147 19.3884 4.78065 19.5122 4.43692C19.7564 3.76824 20.0649 3.13374 20.3808 2.49439L20.4981 2.24389C20.8264 1.5621 21.2967 1.10375 21.9842 0.739058C22.5586 0.648814 23.1203 0.620728 23.7021 0.621967Z" fill="#C6964D"/>
<path d="M41.4395 11.8906C41.5835 11.9359 41.7281 11.9793 41.8738 12.0196C43.2076 12.4396 44.5102 13.176 45.6102 14.0081C45.8321 14.1733 45.8321 14.1733 46.1204 14.3461C46.5215 14.6138 46.8703 14.9119 47.2253 15.2334L47.4353 15.4231C47.9126 15.8623 48.3665 16.3245 48.7953 16.8081L48.9564 16.9893C49.2023 17.2732 49.403 17.5437 49.5637 17.8794L49.7641 18.0666C50.0487 18.3495 50.2231 18.6727 50.4189 19.0152L50.6252 19.3701C51.1312 20.2583 51.5661 21.1557 51.9154 22.1128L51.9893 22.315C53.3812 26.2302 53.1125 30.8896 51.2503 34.6159C50.53 35.9928 49.7097 37.2691 48.6605 38.4327C48.4899 38.6225 48.3239 38.8161 48.1628 39.0135C47.978 39.232 47.7954 39.4075 47.5727 39.5887C47.236 39.8658 46.9089 40.1504 46.5839 40.4405C45.4266 41.4486 44.0975 42.1145 42.7097 42.7709C42.5449 42.8496 42.3815 42.9311 42.2187 43.0134C38.6296 44.7469 33.7918 44.6524 30.0635 43.4551C29.1006 43.1338 28.1661 42.8193 27.3291 42.2475L27.0843 42.1575C26.7439 42.0206 26.4644 41.8416 26.1598 41.6409L25.8363 41.4287L25.5118 41.2149L25.1506 40.9947L24.8704 40.8019V40.5954L24.336 40.3889V40.1824L24.1439 40.0983C23.9073 39.9754 23.7513 39.8508 23.5618 39.6685L23.3712 39.4857L23.1734 39.2918L22.9699 39.0936C22.526 38.6558 22.1281 38.2109 21.7704 37.7043C21.6619 37.564 21.5527 37.4242 21.443 37.2847C21.3376 37.1498 21.233 37.0143 21.129 36.8782L21.0048 36.7178C19.4711 34.7006 18.7553 32.1867 18.3497 29.7536L18.3134 29.5396C18.0643 27.8807 18.1774 26.1274 18.5201 24.4902C18.5602 24.2969 18.5953 24.1027 18.6299 23.9085C19.2595 20.63 21.3771 17.032 24.1222 14.9882H24.336L24.4429 14.6785C24.6656 14.5044 24.8952 14.3386 25.1311 14.1815L25.3382 14.0416C25.8813 13.6781 26.4315 13.3379 27.0084 13.0264L27.1946 12.9221C31.3052 10.6267 37.0227 9.99668 41.4395 11.8906ZM25.298 15.298L25.027 15.4981C24.5248 15.8726 24.0847 16.2502 23.6795 16.7218C23.351 17.0991 22.9986 17.4555 22.6506 17.8161C22.4269 18.0689 22.2608 18.3137 22.0911 18.6021C21.9776 18.7678 21.864 18.9335 21.7503 19.0991C21.2661 19.8329 20.8721 20.6041 20.4877 21.39L20.3336 21.7022C19.5879 23.3143 19.3021 25.0082 19.2049 26.7593L19.192 26.9739C19.0906 28.9045 19.3681 30.9331 20.0601 32.748L20.1454 32.9721C20.6558 34.2855 21.3357 35.4415 22.1512 36.6008L22.296 36.8067C22.7904 37.4976 22.7904 37.4976 23.3739 38.1173H23.5877L23.6732 38.3021C24.223 39.281 25.5368 40.1072 26.4739 40.6987H26.6877V40.9052L26.8598 40.9847C27.4967 41.2844 27.4967 41.2844 27.7633 41.4796C28.0553 41.6888 28.3853 41.8032 28.7187 41.9377L28.9153 42.0205C29.9487 42.4542 30.9877 42.7646 32.086 43.009L32.4375 43.0873C36.2709 43.9045 40.4749 43.1143 43.8316 41.1709C44.0722 41.0192 44.3058 40.8601 44.5395 40.6987C44.6586 40.6188 44.7778 40.5391 44.897 40.4595C46.009 39.7208 46.009 39.7208 46.9982 38.8401V38.6336L47.3188 38.5303C48.4613 37.4855 49.3661 36.0465 50.0982 34.7099C50.1623 34.5961 50.1623 34.5961 50.2275 34.4799C50.8818 33.2765 51.3311 32.0281 51.5584 30.6871C51.5977 30.4591 51.6412 30.2321 51.685 30.005C52.0308 28.1456 51.9384 26.447 51.5947 24.5909L51.5513 24.3553C51.1003 22.016 49.9378 19.7198 48.3878 17.8794L48.1323 17.5692C47.7388 17.0967 47.3395 16.6524 46.8913 16.2273L46.624 15.9562C46.3684 15.7216 46.1242 15.5732 45.8223 15.4012L45.3947 14.9882C44.8886 14.5905 44.3615 14.2613 43.7912 13.9557L43.6016 13.8537C37.7065 10.7083 30.5783 11.1965 25.298 15.298Z" fill="#C8994F"/>
<path d="M43.3637 16.4338L43.5591 16.5629C44.2582 17.0461 44.8775 17.6204 45.5016 18.1891C45.5749 18.2555 45.6483 18.3219 45.7237 18.3905C46.3515 18.9763 46.8784 19.6298 47.3189 20.3575L47.5184 20.6769C49.4139 23.783 49.9322 27.4064 49.0419 30.897C48.7629 31.9349 48.3907 32.8669 47.85 33.8026C47.7368 34.0041 47.6338 34.2094 47.5305 34.4159C47.3699 34.7313 47.171 35.0271 46.938 35.2971C46.737 35.5375 46.5599 35.76 46.3969 36.0264C46.2083 36.3244 45.977 36.5338 45.7154 36.775C45.5903 36.8952 45.4657 37.0156 45.3413 37.1364L45.1483 37.3219C44.9927 37.4736 44.8388 37.6269 44.6865 37.7817C44.4373 38.0098 44.1938 38.1584 43.8981 38.3238L43.7512 38.4723C43.5401 38.6682 43.3041 38.7922 43.0484 38.9272C42.8985 39.009 42.7512 39.0951 42.6066 39.1853C39.8722 40.8771 36.1946 41.4644 33.028 40.8277C32.6951 40.7549 32.3632 40.6774 32.0326 40.5954L31.628 40.505C30.3465 40.1925 29.2142 39.5775 28.0774 38.9433L27.8406 38.8126L27.3291 38.5303V38.3238L27.1529 38.2487C26.8385 38.0843 26.5778 37.8831 26.3002 37.6655L25.9887 37.4243C25.7443 37.2048 25.652 37.057 25.5118 36.775L25.1911 36.6717C25.02 36.4872 24.8572 36.2955 24.7034 36.0973L24.5633 35.919C24.1999 35.448 23.8649 34.9617 23.5409 34.4646L23.4072 34.2603C22.9179 33.4935 22.6103 32.6673 22.3049 31.8187L22.1901 31.509C21.1241 28.4469 21.4728 24.7265 22.9051 21.8319C23.3849 20.9005 23.9181 19.8877 24.6567 19.1184H24.8704L24.944 18.8925C25.1134 18.5416 25.3259 18.349 25.6187 18.0859L25.8526 17.847C26.2845 17.4485 26.7514 17.098 27.2222 16.7435L27.4515 16.5673C27.8435 16.2723 28.2295 16.03 28.6799 15.8272C28.8744 15.7377 29.0656 15.6418 29.2554 15.5432C30.645 14.8314 32.0736 14.445 33.636 14.2654L33.8678 14.2307C37.1638 13.7751 40.6386 14.5985 43.3637 16.4338ZM33.4222 15.298L33.0339 15.3517C30.314 15.7914 27.5573 17.3589 25.8325 19.4282L25.5963 19.6992C25.3502 19.9842 25.1082 20.2725 24.8704 20.564L24.6967 20.7741C24.0904 21.5746 23.7486 22.5387 23.3739 23.4551L23.2832 23.6711C23.0911 24.142 22.9683 24.6025 22.8795 25.1008L22.8391 25.3205C22.568 26.8221 22.561 28.2478 22.8394 29.7536L22.9062 30.115C23.384 32.4646 24.595 34.5007 26.2601 36.2587L26.5341 36.5492C26.7961 36.7763 27.006 36.8602 27.3291 36.9815L27.436 37.2912C27.6625 37.4623 27.8965 37.6238 28.1375 37.7753L28.3554 37.9129C31.4287 39.8163 34.9805 40.4446 38.5657 39.7239C40.5059 39.2926 42.2559 38.287 43.7913 37.0847L44.0184 36.9082C44.1967 36.7657 44.3688 36.6161 44.5395 36.4652V36.2587L44.7233 36.1897C45.0432 36.0092 45.2189 35.7839 45.4482 35.5037L45.692 35.208L45.9292 34.9164L46.1572 34.6474C48.0882 32.2553 48.6575 28.9025 48.3054 25.9656C48.015 23.8324 47.2043 22.011 45.9292 20.2542L45.7087 19.9186C45.4863 19.6138 45.2463 19.3756 44.9671 19.1184C44.842 18.9982 44.7174 18.8778 44.593 18.757L44.4 18.5715C44.2444 18.4198 44.0905 18.2665 43.9382 18.1117C43.6867 17.8814 43.4461 17.741 43.1499 17.5696C42.9684 17.4397 42.788 17.3084 42.6086 17.1759C40.7 15.8332 38.3261 15.2078 35.9878 15.0915L35.7585 15.0786C34.9719 15.0561 34.1972 15.1816 33.4222 15.298Z" fill="#C8994F"/>
<path d="M1.67374 63.8277H71.3707V64.4472H1.67374V63.8277Z" fill="#FDEACB"/>
<path d="M47.6395 46.0679H49.1361C49.4026 46.58 49.6688 47.0925 49.9346 47.605C50.025 47.7789 50.1154 47.9529 50.2059 48.1268C50.3366 48.3782 50.4672 48.6296 50.5976 48.8812L50.7184 49.1131C50.9913 49.6402 51.2443 50.174 51.4878 50.7144C52.1982 49.1775 52.8858 47.636 53.5189 46.0679H55.1223L55.127 46.619C55.1326 47.2206 55.1395 47.8224 55.1476 48.4241C55.1523 48.7888 55.1565 49.1535 55.1593 49.5182C55.1626 49.9378 55.1685 50.3573 55.1745 50.7768L55.1766 51.1726L55.183 51.5421L55.1866 51.8666C55.2362 52.2075 55.3392 52.4003 55.5499 52.6762L55.8706 52.8827V53.1925C55.2754 53.2284 54.7966 53.1613 54.2672 52.8827C53.6715 52.3226 53.594 51.6678 53.5815 50.8959L53.5757 50.6825C53.5691 50.422 53.5641 50.1616 53.559 49.9012L53.5189 48.133L51.4878 52.6762H50.9533C50.2429 51.4139 49.5896 50.1299 48.9566 48.83C48.7716 48.4578 48.5789 48.0892 48.3878 47.72L48.2809 52.6762H47.6395V46.0679Z" fill="#C9974C"/>
<path d="M24.3359 46.0679H25.8325L25.8406 46.6048C25.8496 47.1898 25.859 47.7745 25.8687 48.3593C25.8747 48.714 25.8804 49.0687 25.8856 49.4233C25.8917 49.8308 25.8987 50.2383 25.9056 50.6458L25.911 51.0327L25.9174 51.3898L25.9225 51.7052C25.9228 51.9548 25.9228 51.9548 26.0463 52.1599C26.2937 52.2353 26.5432 52.3046 26.7946 52.3664L26.8837 52.0957C27.0034 51.761 27.1406 51.4446 27.2919 51.1221L27.4618 50.7585L27.6431 50.3723C27.7684 50.1044 27.8935 49.8364 28.0184 49.5684L28.1142 49.3634C28.4886 48.5605 28.8534 47.7536 29.2169 46.9462L29.3551 46.6405L29.4759 46.3723C29.5739 46.1712 29.5739 46.1712 29.6808 46.0679C29.8946 46.0638 30.1084 46.0635 30.3222 46.0679C30.5636 46.6026 30.8046 47.1374 31.0451 47.6725C31.3791 48.414 31.7102 49.1562 32.0271 49.9048C32.0746 50.017 32.1221 50.1289 32.171 50.2446C32.2593 50.4541 32.3468 50.6639 32.4335 50.8741C32.781 51.7336 32.781 51.7336 33.5024 52.2954L33.7429 52.3664V52.6762C32.2168 52.7353 32.2168 52.7353 31.7119 52.3664C31.3263 52.0012 31.0038 51.6388 30.8567 51.1274V50.8176L28.1842 50.9209L27.3291 52.6762C26.9081 52.6845 26.4874 52.6907 26.0663 52.6956L25.7037 52.7035L25.3561 52.7065L25.0354 52.7114C24.7635 52.6762 24.7635 52.6762 24.5729 52.5451C24.3091 52.1822 24.3229 51.7979 24.3239 51.3661V51.0092L24.3256 50.6256L24.3261 50.2314C24.3265 49.8866 24.3275 49.5416 24.3287 49.1966C24.3297 48.8443 24.3303 48.492 24.3308 48.1397C24.332 47.4491 24.3338 46.7585 24.3361 46.0678L24.3359 46.0679ZM29.467 48.0297C29.3484 48.2532 29.2305 48.4769 29.1129 48.7009L29.0129 48.8888C28.7688 49.3555 28.5906 49.8054 28.398 50.3013H30.536C30.3532 49.7716 30.3532 49.7716 30.1376 49.2599L30.0374 49.0401L29.9347 48.8171L29.8295 48.5868C29.7445 48.4009 29.6592 48.2153 29.5739 48.0297H29.467ZM20.8083 53.7087C21.3977 53.701 21.9871 53.6954 22.5764 53.6917C22.7765 53.6902 22.9766 53.6881 23.1768 53.6854C24.7014 53.6654 26.0248 53.6801 27.2164 54.7155C27.8685 55.3691 28.0847 56.0646 28.1174 56.9613C28.0883 57.8655 27.8282 58.6803 27.1692 59.3418C26.3625 60.0651 25.4589 60.3348 24.3777 60.3272L24.1422 60.3267C23.895 60.326 23.6478 60.325 23.4006 60.3236C22.8216 60.3224 22.2425 60.3202 21.6635 60.3171L21.6608 60.1042C21.6518 59.3739 21.6411 58.6437 21.6296 57.9134C21.6255 57.6408 21.6217 57.3682 21.6184 57.0956C21.6136 56.7039 21.6074 56.3123 21.6009 55.9206L21.5971 55.5507L21.5907 55.2063L21.5864 54.9033C21.5553 54.6263 21.5034 54.4558 21.3428 54.225C21.0697 54.1412 21.0697 54.1412 20.8083 54.1218V53.7087ZM23.1601 54.3283C23.1508 54.4995 23.1467 54.6709 23.1479 54.8424V55.1743L23.1496 55.5354L23.1501 55.903C23.1507 56.2924 23.1521 56.6817 23.1533 57.071C23.154 57.3341 23.1544 57.5973 23.1548 57.8605C23.156 58.5073 23.1578 59.154 23.1601 59.8008C23.3653 59.8041 23.5703 59.8065 23.7756 59.8084L24.1218 59.8128C24.8327 59.7862 25.3335 59.4567 25.8325 58.9747C26.3933 58.0932 26.4672 57.1999 26.367 56.1869C26.1928 55.5209 25.8029 54.8873 25.1982 54.5086C24.7243 54.2744 23.6011 53.9022 23.1601 54.3283ZM6.80481 53.7087C7.36377 53.6984 7.92263 53.691 8.4816 53.686C8.67134 53.684 8.86108 53.6812 9.05072 53.6776C11.334 53.6354 11.334 53.6354 12.2633 54.3864C12.697 54.9134 12.6364 55.5432 12.5773 56.1869C12.3025 56.8501 11.7256 57.054 11.0807 57.3227C11.9041 58.9518 11.9041 58.9518 13.3255 60.0073V60.4203C11.8396 60.4981 11.8396 60.4981 11.3663 60.1766C10.638 59.4864 10.1177 58.6288 9.63844 57.7667C9.49285 57.4986 9.49285 57.4986 9.15655 57.4259V60.3171H7.65999L7.65357 59.8023C7.64545 59.1727 7.63594 58.543 7.6261 57.9134C7.62193 57.6408 7.61819 57.3682 7.61488 57.0956C7.61007 56.7039 7.60387 56.3123 7.59735 55.9206L7.5936 55.5507L7.58719 55.2063L7.58291 54.9033C7.55181 54.6263 7.49986 54.4558 7.3393 54.225C7.06617 54.1412 7.06617 54.1412 6.80481 54.1218V53.7087ZM9.15655 54.3283C9.14725 54.5197 9.14511 54.7114 9.14607 54.903L9.14714 55.255L9.14992 55.6254L9.15131 55.9971C9.15259 56.3013 9.1543 56.6055 9.15655 56.9096C9.32697 56.8968 9.49733 56.8832 9.66762 56.8689L9.95518 56.846C10.3496 56.7882 10.576 56.6533 10.8669 56.3934C11.1244 55.9176 11.1377 55.455 10.9738 54.9478C10.7524 54.5903 10.5371 54.3598 10.1186 54.225C9.59728 54.1604 9.59728 54.1604 9.15655 54.3283ZM57.4114 53.8539C58.2649 54.4385 58.733 55.2104 58.9706 56.1869C59.073 57.3048 59.0362 58.3265 58.3268 59.2591C57.7898 59.8671 57.2427 60.3732 56.4051 60.5236C54.4324 60.6433 54.4324 60.6433 53.6258 60.1105L53.4011 59.9658C52.6453 59.4067 52.1589 58.5415 52.0223 57.6324C51.922 56.553 52.0915 55.3495 52.8203 54.4819C54.0665 53.3149 55.8837 52.9944 57.4114 53.8539ZM54.0534 54.7413C53.4136 55.7598 53.5097 57.2452 53.675 58.3852C53.8488 59.0227 54.2005 59.5741 54.7933 59.921C55.2433 60.0959 55.7252 60.0795 56.1876 59.9472C56.765 59.6799 57.0268 59.2234 57.2603 58.665C57.6416 57.5101 57.6021 56.1807 57.1534 55.0511C56.881 54.5877 56.6109 54.2147 56.0844 54.0185C55.1857 53.8662 54.6211 54.0501 54.0534 54.7413ZM18.7977 53.8382C19.5105 54.3176 20.0852 54.9714 20.3302 55.7863C20.5121 56.8563 20.5406 58.0208 19.9532 58.9747L19.8195 59.1982C19.3669 59.8614 18.6968 60.2741 17.9221 60.5236C16.7291 60.6169 15.7197 60.6169 14.7152 59.904C13.9017 59.2341 13.555 58.3925 13.4458 57.3807C13.3906 56.2466 13.5965 55.2761 14.3882 54.4114C15.5925 53.2835 17.3209 53.022 18.7977 53.8382ZM15.6639 54.5606C14.912 55.6258 14.9047 56.9381 15.0852 58.1773C15.2628 58.897 15.5879 59.5506 16.2518 59.9557C16.897 60.0744 17.3969 60.0943 17.9647 59.7375C18.552 59.2463 18.8087 58.5683 18.8842 57.8389C18.9733 56.4894 18.9257 55.3164 17.9688 54.2443C17.2669 53.6843 16.2166 53.9955 15.6639 54.5606Z" fill="#C9974B"/>
<path d="M0.818573 53.7087C1.36033 53.6984 1.90198 53.691 2.44384 53.686C2.6277 53.684 2.81146 53.6812 2.99521 53.6776C5.36021 53.6324 5.36021 53.6324 6.13414 54.275C6.62224 54.8071 6.62202 55.3086 6.61358 55.9859C6.57231 56.5427 6.3752 56.8106 5.96963 57.1936C5.33958 57.6232 4.78307 57.661 4.03885 57.6453L3.17031 57.6324V60.317H1.67375L1.66734 59.8023C1.65921 59.1727 1.6497 58.543 1.63987 57.9134C1.6357 57.6408 1.63195 57.3682 1.62864 57.0956C1.62383 56.7039 1.61763 56.3123 1.61111 55.9206L1.60737 55.5507L1.60095 55.2062L1.59668 54.9033C1.56557 54.6263 1.51362 54.4558 1.35306 54.225C1.07994 54.1412 1.07994 54.1412 0.818573 54.1218V53.7087ZM3.17031 54.225V57.1162C4.11143 57.1514 4.11143 57.1514 4.77377 56.7031C5.12813 56.1896 5.13273 55.669 5.02102 55.0704C4.87553 54.7291 4.75132 54.5551 4.45308 54.3283C4.03661 54.1761 4.03661 54.1761 3.17031 54.225Z" fill="#C8974C"/>
<path d="M59.2913 53.7088C59.5451 53.6978 59.799 53.6891 60.053 53.6829L60.2685 53.6724C60.8236 53.662 61.1115 53.785 61.5362 54.1218C61.7316 54.3075 61.921 54.4991 62.1041 54.6962L62.2573 54.8603C62.6663 55.302 63.0543 55.7591 63.439 56.2207C63.753 56.5892 64.0837 56.9414 64.4178 57.2928C64.6425 57.536 64.853 57.791 65.0638 58.0455L65.1707 53.7088H65.7052V60.3171C65.0638 60.3171 65.0638 60.3171 64.8245 60.1312L64.6028 59.8717L64.3531 59.5854L64.1017 59.2845L63.8636 59.0029C63.7044 58.8144 63.5456 58.6255 63.3872 58.4363C63.0509 58.0457 62.6945 57.6746 62.3383 57.3009C61.975 56.91 61.6332 56.5048 61.2918 56.0957C61.1271 55.8913 61.1271 55.8913 61.0017 55.7739L60.8948 60.3171H60.2534L60.2501 60.1043C60.2385 59.3739 60.2262 58.6437 60.2136 57.9134C60.2089 57.6408 60.2045 57.3682 60.2003 57.0956C60.1941 56.7039 60.1872 56.3123 60.1803 55.9206L60.1749 55.5507L60.1685 55.2063L60.1634 54.9033C60.1498 54.6733 60.1082 54.4457 60.0396 54.225L59.2913 54.0185V53.7088ZM69.3129 53.3603L69.5729 53.3608C70.3475 53.3763 70.8767 53.5373 71.5002 53.9798C71.7733 54.33 71.7381 54.6577 71.7181 55.0769L71.7122 55.31C71.7069 55.4991 71.6999 55.6881 71.6914 55.8771H71.2638L71.205 55.6694C70.9666 54.7874 70.9666 54.7874 70.3418 54.1412C69.7678 53.946 69.2575 53.913 68.6983 54.1605C68.4196 54.3792 68.3851 54.4809 68.3375 54.8253C68.392 55.2729 68.5641 55.3748 68.9121 55.6706C69.1809 55.8507 69.4594 56.0125 69.7405 56.174C71.778 57.3749 71.778 57.3749 71.9711 58.0797C72.0349 58.6715 72.0139 59.0648 71.6914 59.5943C71.2847 60.0744 70.813 60.3661 70.1748 60.4516C69.92 60.4655 69.6684 60.4685 69.4132 60.4655L69.1419 60.4638C68.3947 60.446 67.7119 60.342 67.1283 59.8577C66.8119 59.4966 66.8701 59.0945 66.8744 58.6456L66.8773 58.2475L66.881 57.9422H67.3086L67.3871 58.1725C67.6948 59.0823 67.6948 59.0823 68.3909 59.7298C68.9743 59.8645 69.5454 59.9014 70.0947 59.6523C70.29 59.506 70.29 59.506 70.4086 59.3878C70.4897 58.8061 70.4897 58.8061 70.2053 58.3173C69.7088 57.8745 69.1002 57.5576 68.5265 57.2187C67.8699 56.8196 67.2842 56.4194 66.9779 55.7093C66.8806 55.16 66.8366 54.7439 67.0948 54.225C67.7379 53.5354 68.3779 53.3584 69.3129 53.3603Z" fill="#C9974B"/>
<path d="M41.3661 53.7927C41.7782 54.1168 42.0481 54.3616 42.146 54.8788L42.161 55.2382L42.1794 55.6016L42.1878 55.8771C41.9335 55.8561 41.9335 55.8561 41.6533 55.7739C41.5301 55.556 41.5301 55.556 41.4461 55.2834C41.2307 54.6898 40.9599 54.4064 40.3705 54.1218C39.5523 54.0544 38.8869 54.0238 38.2326 54.5348C37.5136 55.3794 37.427 56.4932 37.5106 57.5526C37.6276 58.3429 37.8134 59.0482 38.4531 59.5878C39.052 59.9941 39.6779 59.9739 40.383 59.871C41.103 59.6728 41.5186 59.1044 41.974 58.5617L42.4016 58.8715C42.2252 59.4964 41.7683 59.9 41.224 60.2485C40.2899 60.6933 39.027 60.6725 38.0246 60.4554C37.7826 60.3614 37.5896 60.2566 37.3774 60.1106L37.1498 59.9585C36.4389 59.4236 36.0129 58.7008 35.8808 57.8389C35.7897 56.588 35.923 55.5118 36.769 54.5122C37.9586 53.302 39.8244 52.9778 41.3661 53.7927ZM39.0143 46.1518C39.4265 46.476 39.6963 46.7208 39.7942 47.238L39.8093 47.5973L39.8277 47.9608L39.836 48.2363C39.5817 48.2153 39.5817 48.2153 39.3015 48.133C39.1784 47.9151 39.1784 47.9151 39.0944 47.6425C38.879 47.0489 38.6082 46.7656 38.0188 46.4809C37.2006 46.4135 36.5352 46.3829 35.8808 46.8939C35.1618 47.7386 35.0753 48.8524 35.1588 49.9118C35.2759 50.7021 35.4617 51.4073 36.1014 51.9469C36.7003 52.3532 37.3262 52.3331 38.0313 52.2301C38.7512 52.0319 39.1669 51.4636 39.6222 50.9209L40.0498 51.2306C39.8734 51.8555 39.4166 52.2592 38.8722 52.6076C37.9382 53.0525 36.6753 53.0316 35.6728 52.8146C35.4309 52.7205 35.2378 52.6157 35.0257 52.4697L34.7981 52.3176C34.0872 51.7827 33.6611 51.06 33.5291 50.1981C33.4379 48.9472 33.5712 47.8709 34.4173 46.8713C35.6069 45.6612 37.4726 45.337 39.0143 46.1518Z" fill="#C8974B"/>
<path d="M43.2568 46.0679H43.8981C44.4519 47.0834 44.9051 48.1301 45.3546 49.1914C45.46 49.4398 45.5656 49.6881 45.6716 49.9363C45.7369 50.0893 45.802 50.2424 45.8666 50.3956C46.3375 51.5785 46.3375 51.5785 47.3189 52.3664V52.6762C45.8706 52.7722 45.8706 52.7722 45.2431 52.3205C44.792 51.8923 44.632 51.3952 44.4326 50.8176H41.7602L41.5464 51.4371C41.4389 51.6584 41.3275 51.8778 41.2124 52.0954L41.0378 52.4268L40.905 52.6762H40.2636C40.6036 51.7919 40.9825 50.922 41.3994 50.069C42.0397 48.7443 42.6527 47.4086 43.2568 46.0679ZM43.043 48.0297C42.8821 48.3694 42.7217 48.7093 42.5619 49.0494C42.516 49.1461 42.4701 49.2429 42.423 49.3426L42.2914 49.623L42.1692 49.8818C42.0676 50.0885 42.0676 50.0885 42.0809 50.3013H44.1119C44.0077 49.7978 43.85 49.3979 43.6375 48.9332L43.5363 48.7041C43.3768 48.295 43.3768 48.295 43.043 48.0297Z" fill="#C9974C"/>
<path d="M28.5049 53.7087C28.781 53.6978 29.0572 53.6892 29.3334 53.6829L29.5696 53.6724C29.9213 53.6662 30.1582 53.6705 30.4515 53.8669C30.7124 54.2142 30.7035 54.5221 30.7006 54.9353C30.7017 55.0145 30.7031 55.0938 30.7044 55.1754C30.7081 55.4287 30.7091 55.6818 30.7097 55.9352C30.621 57.8831 30.621 57.8831 31.3912 59.5943C31.8672 59.8793 32.3446 59.854 32.8877 59.8008C33.3923 59.6294 33.6742 59.4134 33.9567 58.9747C34.1576 58.3412 34.206 57.7568 34.2148 57.0967L34.2211 56.8017C34.2275 56.4935 34.2324 56.1853 34.2373 55.8771L34.2498 55.2467C34.2601 54.7341 34.2691 54.2214 34.2774 53.7087H34.9188C34.9241 54.2928 34.928 54.8768 34.9305 55.4608C34.9316 55.659 34.933 55.8573 34.9348 56.0555C34.9375 56.3422 34.9388 56.6287 34.9396 56.9153L34.943 57.1797C34.9431 58.1372 34.8452 59.1294 34.1258 59.8492C33.4872 60.3947 32.9233 60.4578 32.1061 60.459L31.8415 60.4667C31.1093 60.4701 30.5734 60.2866 30.0028 59.8416C29.1483 58.8555 29.203 57.7399 29.1931 56.5224C29.1906 56.2762 29.1875 56.0299 29.1833 55.7838C29.1807 55.6315 29.1791 55.4792 29.1786 55.327C29.1722 54.9166 29.1335 54.5897 28.9325 54.225C28.7169 54.0862 28.7169 54.0862 28.5049 54.0185V53.7087Z" fill="#C8974B"/>
<path d="M16.6393 45.9646C17.4402 45.9182 18.1222 45.8867 18.7773 46.3777C19.3137 47.0959 19.6327 47.904 19.9733 48.7203C20.0307 48.8565 20.0883 48.9926 20.1459 49.1287C20.369 49.6563 20.5895 50.185 20.8083 50.7144C21.4942 49.3428 22.1054 47.9403 22.7214 46.5387C22.7917 46.3798 22.8667 46.2228 22.9463 46.0679H23.5877C23.3384 46.8312 23.031 47.5612 22.7053 48.2968L22.5428 48.6656C22.4302 48.9213 22.3173 49.1769 22.204 49.4325C22.0592 49.7598 21.915 50.0871 21.7711 50.4147C21.6329 50.7285 21.4943 51.0421 21.3558 51.3557L21.1992 51.7116L21.0532 52.0407L20.9252 52.3303C20.8083 52.573 20.8083 52.5729 20.5945 52.8827C20.3139 52.9021 20.3139 52.9021 20.0601 52.8827L19.9743 52.6897C19.6782 52.0228 19.3816 51.3562 19.0846 50.6896C18.9741 50.4413 18.8637 50.1929 18.7534 49.9445C18.5942 49.586 18.4346 49.2277 18.275 48.8695L18.1275 48.5366C17.9898 48.2291 17.8501 47.9225 17.7083 47.6167L17.573 47.3166L17.439 47.0351L17.3231 46.7862C17.1317 46.5271 16.9489 46.4703 16.6393 46.3777V45.9646Z" fill="#C9974B"/>
<path d="M43.6989 53.6619H44.0295L44.3842 53.6684L44.749 53.6702C45.1335 53.6725 45.5179 53.6777 45.9025 53.6829C46.1632 53.685 46.4239 53.6869 46.6845 53.6886C47.3237 53.6932 47.9626 53.7 48.6016 53.7087V54.225H46.4637V60.3171H44.9671V54.225C43.86 54.2219 43.86 54.2219 43.3636 54.638C43.2681 54.8466 43.2681 54.8466 43.23 55.0704L43.1499 55.4641H42.7223C42.711 55.2491 42.7021 55.0339 42.6955 54.8187L42.6806 54.4557C42.7552 53.8582 43.1017 53.6562 43.6989 53.6619Z" fill="#C8964C"/>
<path d="M49.3499 53.7088H50.8464L50.8546 54.2457C50.8635 54.8306 50.873 55.4154 50.8827 56.0002C50.8887 56.3549 50.8943 56.7095 50.8996 57.0641C50.9057 57.4717 50.9126 57.8791 50.9196 58.2867L50.9249 58.6736L50.9313 59.0306L50.9365 59.3461C50.9368 59.5956 50.9368 59.5956 51.0602 59.8008C51.2718 59.8759 51.4857 59.9451 51.7016 60.0073V60.3171C51.3876 60.3253 51.0737 60.3315 50.7595 60.3365L50.4896 60.3443L50.2296 60.3473L49.9905 60.3523C49.7124 60.3063 49.6247 60.2237 49.4568 60.0073C49.3428 59.6712 49.3369 59.3592 49.3377 59.0071V58.6501L49.3394 58.2665L49.3399 57.8724C49.3404 57.5275 49.3413 57.1826 49.3425 56.8376C49.3436 56.4853 49.3441 56.133 49.3446 55.7807C49.3458 55.0901 49.3476 54.3994 49.3499 53.7088Z" fill="#C8974B"/>
<path d="M35.2395 66.6156H36.0946L36.3084 68.0612L36.4622 67.3964C36.6158 66.7318 36.6158 66.7318 36.736 66.6156C36.9498 66.6115 37.1636 66.6112 37.3774 66.6156C37.5503 67.0927 37.6823 67.5703 37.805 68.0612L38.0188 66.6156H38.874C38.8053 67.0222 38.7361 67.4287 38.6668 67.8353L38.6078 68.1856L38.5504 68.5214L38.4978 68.8311C38.4464 69.0937 38.4464 69.0937 38.3395 69.4035H37.3774C37.2427 69.0327 37.1355 68.6532 37.0567 68.2677L36.736 69.4035H35.774C35.5351 68.4775 35.3643 67.5617 35.2395 66.6156ZM51.5947 66.6156H52.4499L53.0913 67.7514L53.1982 66.6156H53.9465V69.4035H53.0913L52.4499 68.1644L52.343 69.4035H51.5947V66.6156ZM69.5535 66.6156H70.3017C70.5113 66.8342 70.5113 66.8342 70.6625 67.119L70.8186 67.4021L70.9431 67.6481L71.05 67.8547L71.1569 66.6156H71.9052V69.4035H71.05C70.8028 69.1324 70.8028 69.1324 70.6224 68.7839L70.4354 68.4355L70.3017 68.1644V69.4035H69.5535V66.6156ZM48.6016 66.6156H49.3499C49.5594 66.8342 49.5594 66.8342 49.7107 67.119L49.8667 67.4021L49.9913 67.6481L50.0982 67.8547L50.2051 66.6156H50.9534V69.4035H50.0982C49.8509 69.1324 49.8509 69.1324 49.6706 68.7839L49.4835 68.4355L49.3499 68.1644V69.4035H48.6016V66.6156Z" fill="#FFE5BC"/>
<path d="M31.6049 66.6156H32.4601L33.1015 67.8547L33.2084 66.6156H33.9567V69.4035H33.1015L32.4601 68.2677L32.3532 69.4035H31.6049V66.6156Z" fill="#FFE5BD"/>
<path d="M13.7531 66.6156H14.5014C14.7109 66.8342 14.7109 66.8342 14.8622 67.119L15.0183 67.4021L15.1428 67.6482L15.2497 67.8547L15.3566 66.6156H16.1049V69.4035H15.2497C15.0024 69.1324 15.0024 69.1324 14.8221 68.784L14.635 68.4355L14.5014 68.1644V69.4035H13.7531V66.6156ZM5.41516 66.6156H6.16344C6.37296 66.8342 6.37296 66.8342 6.52422 67.119L6.68029 67.4021L6.80482 67.6482L6.91172 67.8547L7.01862 66.6156H7.7669V69.4035H6.91172C6.66447 69.1324 6.66447 69.1324 6.48413 68.784L6.29706 68.4355L6.16344 68.1644V69.4035H5.41516V66.6156ZM68.4111 66.6672C68.8378 67.0507 69.0054 67.4264 69.0289 67.9898C68.9917 68.5239 68.8514 68.8852 68.4845 69.3002C68.1607 69.546 67.8166 69.5439 67.4113 69.533C66.9947 69.4808 66.7498 69.2881 66.4802 68.9905C66.1839 68.5325 66.187 68.0679 66.2397 67.5449C66.3908 67.1695 66.5512 66.8679 66.881 66.6156C67.4406 66.4354 67.881 66.4354 68.4111 66.6672ZM67.3086 67.2351C67.0862 67.5575 67.0655 67.6412 67.0681 68.0096L67.0664 68.2516C67.0813 68.5047 67.0813 68.5047 67.3086 68.784C67.5713 68.8443 67.5713 68.8443 67.8431 68.784C68.137 68.5392 68.1624 68.384 68.2039 68.0096C68.1624 67.6351 68.137 67.4799 67.8431 67.2351C67.5713 67.1748 67.5713 67.1748 67.3086 67.2351ZM56.6524 66.6672C57.0791 67.0507 57.2467 67.4264 57.2702 67.9898C57.233 68.5239 57.0927 68.8852 56.7258 69.3002C56.402 69.546 56.0579 69.5439 55.6526 69.533C55.236 69.4808 54.9911 69.2881 54.7215 68.9905C54.4252 68.5325 54.4283 68.0679 54.481 67.5449C54.6321 67.1695 54.7925 66.8679 55.1224 66.6156C55.682 66.4354 56.1223 66.4354 56.6524 66.6672ZM55.5499 67.2351C55.3275 67.5575 55.3069 67.6412 55.3094 68.0096L55.3077 68.2516C55.3226 68.5047 55.3226 68.5047 55.5499 68.784C55.8126 68.8443 55.8126 68.8443 56.0844 68.784C56.3783 68.5392 56.4037 68.384 56.4452 68.0096C56.4037 67.6351 56.3783 67.4799 56.0844 67.2351C55.8126 67.1748 55.8126 67.1748 55.5499 67.2351ZM30.1084 66.5124C30.5052 66.6827 30.7341 66.8805 30.9636 67.2351C31.151 67.7783 31.145 68.2891 30.9301 68.8227C30.6816 69.1962 30.5479 69.3653 30.1084 69.5067C29.6158 69.5458 29.351 69.5496 28.8991 69.3519C28.5322 69.0222 28.3803 68.7422 28.2912 68.2677C28.2772 67.7246 28.3532 67.2509 28.7187 66.8221C29.1517 66.4757 29.5673 66.4339 30.1084 66.5124ZM29.2732 67.3965C29.0988 67.7424 29.1041 67.9906 29.1463 68.3709C29.2554 68.6292 29.2554 68.6292 29.467 68.784C29.7389 68.8443 29.7389 68.8443 30.0015 68.784C30.224 68.4616 30.2446 68.3779 30.242 68.0096L30.2437 67.7675C30.2289 67.5144 30.2289 67.5144 30.0015 67.2351C29.6701 67.1777 29.5312 67.1817 29.2732 67.3965ZM18.7707 66.6479L18.9911 66.8221V67.1319C18.7773 67.3062 18.7773 67.3062 18.5635 67.4417L18.4566 67.3384C18.1404 67.3126 18.1404 67.3126 17.8152 67.3384C17.5546 67.5901 17.5357 67.7111 17.4945 68.0612C17.5355 68.3938 17.5355 68.3938 17.6014 68.6807L18.3497 68.784V68.3709H17.9221V67.7514H19.098C19.1124 67.9858 19.1228 68.2202 19.1315 68.4549L19.1502 68.8506C19.098 69.197 19.098 69.197 18.8583 69.3954C18.4234 69.5596 18.0613 69.5772 17.6014 69.5067C17.1329 69.2805 16.8318 69.0522 16.6394 68.5775C16.5624 67.9605 16.5878 67.4518 16.9601 66.9254C17.4868 66.4642 18.1158 66.3653 18.7707 66.6479Z" fill="#FFE5BC"/>
<path d="M43.1498 66.6156H44.005V67.6481H44.8602V66.6156H45.6085V69.4035H44.8602V68.2677H44.005V69.4035H43.1498V66.6156Z" fill="#FFE4BD"/>
<path d="M4.49988 66.6672L4.77375 66.8221C4.62731 67.1485 4.56103 67.2344 4.23927 67.4416L4.13237 67.3384C3.81617 67.304 3.81617 67.304 3.49099 67.3384C3.22823 67.7191 3.24395 67.9211 3.27719 68.3709C3.45988 68.7132 3.45988 68.7132 3.82504 68.7517L4.13237 68.784V68.3709H3.59789V67.7514H4.77375C4.78819 67.9858 4.79855 68.2202 4.80721 68.4549L4.82592 68.8506C4.77376 69.197 4.77375 69.197 4.53078 69.3957C3.99266 69.6006 3.55673 69.5697 3.02994 69.3777C2.62758 69.1246 2.46595 68.9113 2.31512 68.4742C2.25846 67.8292 2.33586 67.3513 2.74271 66.8221C3.31749 66.4273 3.85764 66.3966 4.49988 66.6672ZM26.2535 66.6479L26.4739 66.8221C26.4739 67.1319 26.4739 67.1319 26.3068 67.3191C26.0463 67.4416 26.0463 67.4416 25.6454 67.3578L25.298 67.2351C25.4979 67.4604 25.6599 67.5648 25.9394 67.6998C26.4365 67.9398 26.4365 67.9398 26.5808 68.1644C26.6638 68.8862 26.6638 68.8862 26.3803 69.2422C25.9624 69.5391 25.5923 69.5613 25.0842 69.5067C24.7101 69.3519 24.7101 69.3519 24.4428 69.197C24.4428 68.8872 24.4428 68.8872 24.6566 68.5774L25.7256 68.6807C25.4775 68.501 25.2252 68.3259 24.964 68.1644C24.6566 67.9579 24.6566 67.9579 24.4428 67.6481C24.4777 67.0204 24.4777 67.0204 24.6967 66.7318C25.1756 66.4116 25.7373 66.4252 26.2535 66.6479ZM60.681 66.6156H61.6431C61.7863 67.0219 61.9286 67.4285 62.0706 67.8353L62.1942 68.1856L62.3112 68.5214L62.4198 68.8311C62.4982 69.0937 62.4982 69.0937 62.4982 69.4035H61.6431L61.5362 68.9905H60.7879L60.681 69.4035H59.8258C60.0514 68.4523 60.3514 67.5366 60.681 66.6156ZM61.1086 67.3384L60.8948 68.2677H61.4293L61.2155 67.3384H61.1086Z" fill="#FFE5BC"/>
<path d="M20.167 66.6156H21.0221C21.2462 67.2035 21.3909 67.7464 21.4497 68.3709H21.6635L21.697 68.0159C21.7588 67.5249 21.9148 67.0783 22.0911 66.6156H22.8394C22.7301 67.2711 22.5561 67.8995 22.3516 68.5323L22.2798 68.756C22.1051 69.2867 22.1051 69.2867 21.9842 69.4035H21.0221L20.167 66.6156Z" fill="#FFE5BD"/>
<path d="M57.3672 66.6156H58.2224L58.6499 68.2677L59.1844 66.6156H59.9327C59.8626 67.2409 59.6911 67.8165 59.4984 68.4162L59.4072 68.7047C59.3334 68.9378 59.259 69.1706 59.1844 69.4035H58.1155C57.9902 68.9971 57.8655 68.5905 57.7413 68.1837L57.6331 67.8335L57.5308 67.4977L57.4359 67.1879C57.3672 66.9254 57.3672 66.9254 57.3672 66.6156ZM9.58414 66.6156H11.9359V67.2351H11.0807V69.4035H10.3324V67.2351H9.58414V66.6156Z" fill="#FFE4BD"/>
<path d="M62.2845 66.6156H64.5293V67.2351H63.781V69.4035H63.0327V67.2351H62.2845V66.6156ZM40.4774 66.6156H42.7223V67.2351H41.974V69.4035H41.2257V67.2351H40.4774V66.6156ZM64.9569 66.6156H65.8121V69.4035H64.9569V66.6156ZM39.1947 66.6156H40.0498V69.4035H39.1947V66.6156Z" fill="#FFE5BD"/>
<path d="M1.03238 66.6156H1.88756V69.4035H1.03238V66.6156Z" fill="#FFE3BC"/>
<path d="M47.212 66.6156H47.9602V69.4035H47.212V66.6156ZM27.1153 66.6156H27.8636V69.4035H27.1153V66.6156Z" fill="#FFE5BD"/>
<path d="M23.1601 66.6156H23.9084V69.4035H23.1601V66.6156Z" fill="#FFE5BC"/>
<path d="M12.3635 66.6156H13.1117V69.4035H12.3635V66.6156Z" fill="#FFE5BD"/>
<path d="M8.40826 66.6156H9.15654V69.4035H8.40826V66.6156Z" fill="#FFE5BC"/>
</svg>
);

export default Logo;
