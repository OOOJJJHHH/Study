```
def binSearch(ary, fData):
    global count
    start = 0
    end = len(ary) - 1

    while(start <= end):
        count += 1
        mid = (start + end)//2

        if fData == ary[mid]:
            return mid
        elif fData > ary[mid]:
            start = mid + 1
        elif fData < ary[mid]:
            end = mid - 1



## 전역변수 선언 부분 ##
# 사용자로부터 입력받은 원본 정수들을 저장할 리스트
num = []
# 입력받은 정수를 오름차순, 내림차순으로 정렬하여 저장할 리스트
ascSort, descSort = [],[]
# 이진 탐색 비교 횟수를 기록할 변수
count = 0
# 사용자가 검색하고자 입력하는 키 값
keyNum = 0
# 검색된 키 값의 인덱스를 저장할 변수
findDataIndex = 0

## main 코드 부분 ##
if __name__=="__main__":
    print("정수 10개를 공백으로 구분해 입력")
    for i in range(10):
        print("%d번째 정수입력"%(i+1))
        val = int(input(""))
        num.append(val)

    # num[:] ""→"" num 리스트의 0번 인덱스부터 끝까지 모든 요소를 가져와라
    ascSort = num [ : ] #numlist 원소들을 ascSort에 복사
    descSort = num [ : ] #numlist 원소들을 descSort에 복사
    #ascSort.sort(reverse=False) #오름차순 정렬 시킴
    ascSort.sort() #오름차순 정렬 시킴
    descSort.sort(reverse=True)#내림차순 정렬 시킴

    print("입력된 정수들=", num)
    print("오름차순 정렬된 ascSort=", ascSort)
    print("내림차순 정렬된 descSort=", descSort)

    keyNum = int(input("검색하고자 하는 키값입력="))
    #findDataIndex = binSearch(num, keyNum)
    findDataIndex = binSearch(ascSort, keyNum)
    print("검색된 키값의 index=%d" % findDataIndex)
    print("검색된 키값=%d" % ascSort[findDataIndex])
```
