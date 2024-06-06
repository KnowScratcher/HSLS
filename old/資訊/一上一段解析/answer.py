a,c = list(map(int,input().split()))

#基礎

if c == 0 or a % c == 0:
    print("OK!")
else:
    print(a % c)

#進階
print("OK!" if c == 0 or a % c == 0 else a % c)