import { Box, Stack, Typography } from '@mui/material'

const galleryList = [
  'https://authentiktravel.com/media/ckeditor/tourist%20attraction%20in%20sai%20gon%20-%20Reunification%20palace.jpg',
  'https://dinhdoclap.gov.vn/wp-content/uploads/2018/03/4.jpg',
  'https://files.structurae.net/files/photos/2445/dsc_8604.jpg',
  'https://designs.vn/wp-content/images/07-01-2016/Kien-truc-dinh-doc-lap-9_resize(1).jpg',
  'https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1628135422/blog/hu0emj3b3fikttjwh8bk.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-s/16/f1/83/95/trung-bay-t-dinh-norodom.jpg',
  // 'https://media-cdn-v2.laodong.vn/Storage/newsportal/2018/8/5/623240/IMG_7981.jpg',
  // 'https://media-cdn-v2.laodong.vn/storage/newsportal/2018/8/5/623240/IMG_7963.jpg',
  // 'https://media-cdn-v2.laodong.vn/Storage/newsportal/2018/8/5/623240/IMG_7967.jpg',
  // 'https://media-cdn-v2.laodong.vn/Storage/newsportal/2018/8/5/623240/IMG_7962.jpg',
  // 'https://media-cdn-v2.laodong.vn/Storage/newsportal/2018/8/5/623240/IMG_7965.jpg',
  // 'https://media-cdn.tripadvisor.com/media/photo-s/16/f1/8b/73/trung-bay-t-dinh-norodom.jpg',
  // 'https://truetech.com.vn/wp-content/uploads/2018/04/logo-img2449-15205756445321810455101.jpg',
  // 'https://truetech.com.vn/wp-content/uploads/2018/04/logo-img2367-15205756432171991543096.jpg',
]

export function Gallery() {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Gallery
      </Typography>

      <Stack direction="row" alignItems="center" flexWrap="wrap" sx={{ mx: -1 }}>
        {galleryList.map((item, idx) => (
          <Box sx={{ width: { xs: '100%', sm: 1 / 2, md: 1 / 3 } }} key={idx}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ position: 'relative', height: 0, paddingTop: '56.25%', width: '100%' }}>
                <Box
                  component="img"
                  width="100%"
                  height="100%"
                  alt=""
                  src={item}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,

                    borderRadius: 1,
                    verticalAlign: 'middle',
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
