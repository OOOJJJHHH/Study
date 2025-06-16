```
import sys
from collections import deque

# 스택 오버플로우 방지
sys.setrecursionlimit(10000)
# 입력 속도 개선
input = sys.stdin.readline

# map() 함수로 인해서 숫자를 공백을 두고 입력하게 되면 순서대로 값이 대입 됌
# 정점 개수, 간선 개수, 시작 정점
n, m, v = map(int, input().split())

# 입력한 정점의 개수만큼 배열의 길이를 늘려놓고 []로 초기화 선언
A = [[] for _ in range(n+1)]
#특정 노드의 방문 여부(True/False 값)를 기록하기 위해
# 모든 노드의 상태를 '방문하지 않음'을 의미하는 False로 초기화하는 코드
visited = [False] * (n+1)

# 인접 리스트 생성
for _ in range(m):
    s, e = map(int, input().split())
    A[s].append(e)
    A[e].append(s)

# 위 코드들은 노드들끼리의 연결 상태를 확인하고
# 배열에 현재 상태를 저장해놓은 상태
# ex)  A = [[], [2], [1, 3], [2], [5], [4]]
# ====================================

# 작은 정점 번호부터 방문하도록 정렬
# ex)  A = [[], [2], [3, 1], [2], [5], [4]]
#  ""↓""  오름차순으로 변환
# ex)  A = [[], [2], [1, 3], [2], [5], [4]]
for i in range(1, n+1):
    A[i].sort()

# DFS 탐색 결과를 저장할 리스트
dfs_result = []

# 해당 함수의 핵심
# ""↓""
# "갈 수 있는 한 가장 깊이 들어가서 탐색하고, 더 이상 갈 곳이 없으면 이전으로 돌아온다"
def DFS(v):
    # 현재 방문한 노드 v를 탐색 결과 리스트에 추가
    visited[v] = True
    dfs_result.append(v)
    # 현재 노드 v에 인접한 모든 노드들을 순회
    # 현재 노드랑 연결되어있는 노드가 [3,4]로 되어있다면
    # i는 3,4 순으로 바뀜
    for i in A[v]:
        # 만약 3번 노드가 방문하지 않은 상태라면 True로 해서
        # 해당 노드를 기준으로 다시 DFS를 수행
        if not visited[i]:
            DFS(i)

# BFS
bfs_result = []

def BFS(v):
    # 큐(Queue)를 생성하고 시작 노드 v를 큐에 넣음
    queue = deque([v])
    # 큐에 넣는 순간 해당 노드를 방문한 것으로 간주
    visited[v] = True
    # 큐가 비어있지 않다면 반복
    while queue:
        # popleft()는 큐의 맨 앞에서 요소를 제거하고 그 값을 반환하는데
        # node변수에는 현재 우리가 탐색할 대상 노드가 들어가게 된다
        node = queue.popleft()
        # 방문했다는 것을 기록하기 위해 bfs_result에 삽입
        bfs_result.append(node)
        # 1번 노드 바로 아래 연결되어있는 노드들을 반복해서 방문 처리를 하고
        # 큐에 바로 넣음
        # 계속해서 모든 노드들이 반복해서 방문될 수 있는이유는 
        # while queue:
        # 로 인해서 queue안에 내용들을 하나씩 빼가면서 for를 돌리면서 방문처리 하기 때문
        for i in A[node]:
            if not visited[i]:
                visited[i] = True
                queue.append(i)

# DFS 실행행
visited = [False] * (n+1)
DFS(v)

# BFS 실행
visited = [False] * (n+1)
BFS(v)

# 결과출력력
print(" ".join(map(str, dfs_result)))
print(" ".join(map(str, bfs_result)))
```
